import AvailablePlant from './AvailablePlant';
// TODO: Import Flowerbed component

const Main = () => {
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

  // TODO: Use .map() to iterate over plants array
  // and create multiple instances of the AvailablePlant component
  // Use plant id as key
  let availablePlantsJSX = testPlants.map(plant => {
    return <AvailablePlant key={plant.id} plant={plant} />;
  });

  return (
    <main>
      <div id="left-column">
        <h3>Available Plants</h3>
        {/* TODO: replace these 3 with mapped JSX */}
        <AvailablePlant plant={testPlants[0]} />
        <AvailablePlant plant={testPlants[1]} />
        <AvailablePlant plant={testPlants[2]} />
      </div>

      <div id="right-column">
        {/* TODO: Create and use Flowerbed component */}
      </div>
    </main>
  );
};

export default Main;
