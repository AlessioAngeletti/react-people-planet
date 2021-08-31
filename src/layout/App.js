import { Container } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PeopleDashboard from '../features/people/PeopleDashboard';
import HomePage from '../features/home/HomePage';

const App = () => {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Container style={{ marginTop: '4em' }}>
        <Switch>
          <Route path='/people' component={PeopleDashboard} />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
