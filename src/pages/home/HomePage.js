import { Segment, Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          People Planet
        </Header>
        <Button as={Link} to='/people' size='huge' positive>
          Go to People!
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
