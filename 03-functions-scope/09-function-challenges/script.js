// Challenge 1
const getCelsius = f => (f - 32) * 5 / 9;
console.log(`The temperature is ${Math.round(getCelsius(32))} \xB0C`);

// Challenge 2
const minMax = nums => {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  return {
    min,
    max,
  }
}
console.log(minMax([100,2,-3,4,5]));

// Challenge 3
((l, w) => {
  const area = l * w;
  console.log(`The area of a rectangle with a length of ${l} and a width of ${w} is ${area}.`);
})(5, 10);