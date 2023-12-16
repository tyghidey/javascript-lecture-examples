import AvailablePlant from './AvailablePlant';
import Flowerbed from './Flowerbed';

const Main = () => {
  // TODO: Create state variable to hold all plant objects

  // TODO: Create state variable to track loading status

  // TODO: Write an asynchronous function to fetch JSON and create an array of JS objects
  // Alphabetize them by name before updating allPlants state variable

  // TODO: Set a useEffect() hook to run once and call fetch function

  // TODO: Set a second useEffect() hook to set loading to false once allPlants has objects

  // Temporary test data
  let testPlants = [
    {
      id: 1,
      name: 'Hyacinth',
      color: 'blue',
      image:
        'https://drive.google.com/uc?export=view&id=1wZU8kWKcTWCIEMjz-Ce7dTU8Fcb-NM9I',
      numAvailable: 6,
      numAllocated: 2,
    },
    {
      id: 2,
      name: 'Tulip',
      color: 'red',
      image:
        'https://drive.google.com/uc?export=view&id=1Vl0Ch4MQslwh9EyhnGX1RK9YZbPuHtvo',
      numAvailable: 6,
      numAllocated: 6,
    },
    {
      id: 3,
      name: 'Daffodil',
      color: 'yellow',
      image:
        'https://drive.google.com/uc?export=view&id=1BwQ_BdSgB6XGdU_OOm5iYQFXKjKEcW1Q',
      numAvailable: 4,
      numAllocated: 12,
    },
  ];

  // TODO: Write two handlers for updating allPlants when plants are allocated or returned

  // TODO: Add props to AvailablePlant to pass down handlers for returning and allocating plants
  // TODO: Make sure these are being built from allPlants instead of testPlants
  let availablePlantsJSX = testPlants.map(plant => {
    return (
      <AvailablePlant
        key={plant.id}
        plant={plant}
      />
    );
  });

  // TODO: Prevent page from rendering until data has been fetched (use loading state variable)
  return (
    <main>
      <div id="left-column">
        <h3>Available Plants</h3>
        {availablePlantsJSX}
      </div>

      <div id="right-column">
        {/* TODO: Make sure selectedPlants is using allPlants instead of testPlants */}
        {/* TODO: Filter allPlants so that only plants with allocations are included */}
        <Flowerbed
          selectedPlants={testPlants}
        />
      </div>
    </main>
  );
};

export default Main;
