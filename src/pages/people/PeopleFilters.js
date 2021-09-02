import { Segment, Header, Form } from 'semantic-ui-react';

const PeopleFilters = (props) => {
  const handleNameChange = (event) => {
    props.handleFilterNameChange(event.target.value);
  };

  return (
    <Segment>
      <Header as='h2' content='Filters' />
      <Form>
        <Form.Field>
          <label>Filter By Name</label>
          <input
            style={{ width: '20em' }}
            placeholder='Name'
            value={props.filteredName}
            onChange={handleNameChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default PeopleFilters;
