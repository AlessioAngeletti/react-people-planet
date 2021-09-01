import { NavLink } from 'react-router-dom';

import { Button, Container, Menu } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          People Planet
        </Menu.Item>
        <Menu.Item>
          <Button as={NavLink} to='/people' positive content='People' />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
