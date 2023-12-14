import { capitalize } from '../shared/utils';

const AvailablePlant = props => {
  // TODO: Include image property and remove id (when no longer needed)
  let { id, name, color, numAvailable } = props.plant;

  // TODO: Define two handlers for allocating and returning plants

  // TODO: Replace simple text with a card containing image, text, and arrow icons as buttons

  // TODO: Add click handlers to icons

  return (
    <p id={id}>
      {name} - {color} - {numAvailable} available
    </p>
  );
};

export default AvailablePlant;
