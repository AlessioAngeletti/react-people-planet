import { Segment, Header } from 'semantic-ui-react';
import PeopleListItem from './PeopleListItem';

const PeopleList = () => {
  return (
    <Segment>
      <Header as='h2' content='People List' />
      <PeopleListItem />
      <PeopleListItem />
      <PeopleListItem />
    </Segment>
  );
};

export default PeopleList;
