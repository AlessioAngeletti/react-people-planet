import { Grid, Loader } from 'semantic-ui-react';

import PeopleList from './PeopleList';
import PeopleFilters from './PeopleFilters';

const PeopleDashboard = () => {
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row>
          <PeopleFilters />
        </Grid.Row>
        <Grid.Row style={{ marginTop: '1em' }}>
          {true && <PeopleList />}
          <Loader active={false} />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
};

export default PeopleDashboard;
