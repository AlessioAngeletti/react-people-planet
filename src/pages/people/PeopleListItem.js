import { useContext } from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import { getLastNumberFromUrl } from '../../common/util';
import { PlanetContext } from '../../context/planet-context';

const PeopleListItem = (props) => {
  const planetContext = useContext(PlanetContext);

  return (
    <Segment>
      <Grid>
        <Grid.Column width='3'>
          <div>{props.name}</div>
        </Grid.Column>
        <Grid.Column width='2'>
          <div>{props.height} cm</div>
        </Grid.Column>
        <Grid.Column width='2'>
          <div>{props.mass} kg</div>
        </Grid.Column>
        <Grid.Column width='2'>
          <div>{props.created}</div>
        </Grid.Column>
        <Grid.Column width='2'>
          <div>{props.edited}</div>
        </Grid.Column>
        <Grid.Column width='5'>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() =>
              planetContext.handleSetPlanet(
                getLastNumberFromUrl(props.homeworld)
              )
            }
          >
            {props.homeworld}
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PeopleListItem;
