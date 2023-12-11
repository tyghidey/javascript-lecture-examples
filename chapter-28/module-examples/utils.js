// TODO: export each function

const getRandomIndex = (max) => {
  return Math.floor(max * Math.random());
};

const getTitleCase = str => {
  return str.split(" ").reduce((acc, word) => {
    return acc + word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
  }, "").trim();
};
