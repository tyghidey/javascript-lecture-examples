import SelectedPlant from './SelectedPlant';

// Note the destructuring of selectedPlants from the props object
const Flowerbed = ({ selectedPlants }) => {

  // TODO: Create state variables for flowerbed name and editing status

  // TODO: Create a handler for updating flowerbed name

  // TODO: Create handlers for opening and closing the form

  const plantsJSX = selectedPlants.map(plant => {
    return <SelectedPlant key={plant.id} plant={plant} />;
  });

  return (
    <div className="flowerbed">
      {/* TODO: Add conditional styling to div based on editing status */}
      <div className="flowerbed-name">
        <h4>My Flowerbed</h4>
        {/* TODO: Add button to open form for editing name */}
      </div>
      {/* TODO: Add form with text input that shows only when in editing mode */}
      {selectedPlants.length ? (
        <div className="plant-grid">{plantsJSX}</div>
      ) : (
        <p>Select a plant to get started!</p>
      )}
    </div>
  );
};

export default Flowerbed;
