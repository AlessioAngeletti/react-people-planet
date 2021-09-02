import { useEffect, useState, useContext } from 'react';
import { Grid, Loader } from 'semantic-ui-react';

import PeopleList from './PeopleList';
import PeopleFilters from './PeopleFilters';
import agent from '../../api/agents';
import PlanetModal from '../../components/PlanetModal';
import { PlanetContext } from '../../context/planet-context';

const PeopleDashboard = () => {
  const planetContext = useContext(PlanetContext);

  const { planet, handleClearPlanet } = planetContext;

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredName, setFilteredName] = useState('');

  const handleFilterNameChange = (filteredName) => {
    setFilteredName(filteredName);
  };

  const peopleFiltered = people.filter((person) => {
    return filteredName.length > 0
      ? person.name.toLowerCase().match(filteredName.toLowerCase())
      : true;
  });

  useEffect(() => {
    agent.People.list().then((response) => {
      let people = [];
      if (!!response.results) {
        response.results.forEach((person) => {
          person.created = person.created.split('T')[0];
          person.edited = person.edited.split('T')[0];
          people.push(person);
        });
      }
      setPeople(people);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Grid>
        <Grid.Column>
          <Loader active={loading} />
          {!loading && (
            <>
              <Grid.Row>
                <PeopleFilters
                  filteredName={filteredName}
                  handleFilterNameChange={handleFilterNameChange}
                />
              </Grid.Row>
              <Grid.Row style={{ marginTop: '1em' }}>
                <PeopleList people={peopleFiltered} />
              </Grid.Row>
            </>
          )}
        </Grid.Column>
      </Grid>
      {!!planet && (
        <PlanetModal
          name={planet?.name}
          climate={planet?.climate}
          diameter={planet?.diameter}
          population={planet?.population}
          open={!!planet}
          handleClose={handleClearPlanet}
        />
      )}
    </>
  );
};

export default PeopleDashboard;
