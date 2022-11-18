const analyzeArray = (arr) => {
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  const object = {
    average,
    min,
    max,
    length,
  };

  return object;
};

module.exports = analyzeArray;
