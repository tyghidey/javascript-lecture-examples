import SelectedPlant from './SelectedPlant';

// Note the destructuring of selectedPlants from the props object
const Flowerbed = ({ selectedPlants }) => {

  // TODO #4: Create state variables for flowerbed name and editing status

  // TODO #5: Create a handler for updating flowerbed name

  // TODO #6: Create handlers for opening and closing the form

  const plantsJSX = selectedPlants.map(plant => {
    return <SelectedPlant key={plant.id} plant={plant} />;
  });

  return (
    <div className="flowerbed">
      {/* TODO #8: Add conditional styling to div based on editing status */}
      <div className="flowerbed-name">
        <h4>My Flowerbed</h4>
        {/* TODO #2: Add button to open form for editing name */}
      </div>
      {/* TODO #3: Add form with text input */}
      {/* TODO #7: Ensure form shows only when in editing mode */}
      {selectedPlants.length ? (
        <div className="plant-grid">{plantsJSX}</div>
      ) : (
        <p>Select a plant to get started!</p>
      )}
    </div>
  );
};

export default Flowerbed;
