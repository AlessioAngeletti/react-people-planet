import { Container } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PeopleDashboard from '../pages/people/PeopleDashboard';
import HomePage from '../pages/home/HomePage';
import NavBar from '../layout/NavBar';

const App = () => {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Container style={{ marginTop: '4em' }}>
              <NavBar />
              <Switch>
                <Route path='/people' component={PeopleDashboard} />
                <Route>
                  <Redirect to='/' />
                </Route>
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
};

export default App;
