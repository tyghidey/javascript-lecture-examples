import { capitalize } from '../shared/utils';

const AvailablePlant = props => {
  // TODO: Destructure additional props to receive handlers from Main
  let { name, color, image, numAvailable } = props.plant;

  // TODO: Simplify by placing anonymous functions on icons
  // to call handlers passed down via props
  const handleReturnPlant = () => {
    console.log(`This button will return 1 ${color} ${name}.`);
  };

  const handleAllocatePlant = () => {
    console.log(`This button will allocate 1 ${color} ${name}.`);
  };

  // TODO: Add conditional unavailable class when no more plants available to allocate
  return (
    <div className="card available-plant-card">
      <div className="img-txt-combo">
        <img src={image} width="50px" height="50px" alt={`${color} ${name}`} />
        <p>
          {name}, {capitalize(color)}
          <br />
          <span className="amount-txt">{numAvailable} available</span>
        </p>
      </div>
      <div className="arrow-group">
        <i
          className="chevron-left fa fa-chevron-circle-left"
          title="Remove one plant from flowerbed"
          onClick={handleReturnPlant}></i>
        <i
          className="chevron-right fa fa-chevron-circle-right"
          title="Add one plant to flowerbed"
          onClick={handleAllocatePlant}></i>
      </div>
    </div>
  );
};

export default AvailablePlant;
