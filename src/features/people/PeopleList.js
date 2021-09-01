import { Segment, Header, Grid } from 'semantic-ui-react';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
  return (
    <Segment>
      <Header as='h2' content='People List' />
      <Grid>
        <Grid.Column width='3'>
          <Header as='h3' content='Name' />
        </Grid.Column>
        <Grid.Column width='2'>
          <Header as='h3' content='Height' />
        </Grid.Column>
        <Grid.Column width='2'>
          <Header as='h3' content='Mass' />
        </Grid.Column>
        <Grid.Column width='2'>
          <Header as='h3' content='Created' />
        </Grid.Column>
        <Grid.Column width='2'>
          <Header as='h3' content='Edited' />
        </Grid.Column>
        <Grid.Column width='5'>
          <Header as='h3' content='Planet' />
        </Grid.Column>
      </Grid>
      {props.people.map((person, index) => (
        <PeopleListItem
          key={index}
          name={person.name}
          height={person.height}
          mass={person.mass}
          created={person.created}
          edited={person.edited}
          homeworld={person.homeworld}
        />
      ))}
    </Segment>
  );
};

export default PeopleList;
