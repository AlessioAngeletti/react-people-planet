import { Button, Header, Image, Modal } from 'semantic-ui-react';

import planet from '../assets/planet.png';

const PlanetModal = (props) => {
  const populationFormatted = isNaN(props.population)
    ? props.population
    : '' + parseInt(props.population).toLocaleString();
  const diameterFormatted = isNaN(props.diameter)
    ? props.diameter
    : '' + parseInt(props.diameter).toLocaleString() + ' km';

  return (
    <Modal open={props.open}>
      <Modal.Header>{props.name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={planet} wrapped />
        <Modal.Description>
          <Header>Planet Detail</Header>
          <Header as='h4' content='Climate: ' />
          <p>{props.climate}</p>
          <Header as='h4' content='Population: ' />
          <p>{populationFormatted}</p>
          <Header as='h4' content='Diameter: ' />
          <p>{diameterFormatted}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={props.handleClose}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PlanetModal;
