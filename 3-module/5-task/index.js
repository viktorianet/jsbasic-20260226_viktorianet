function getMinMax(str) {

  let arr = str.split(" ");

  let numbers = arr.filter(item => !isNaN(item))
                   .map(item => Number(item));

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}
