
const numbers = [1, 7, 10, 9, 8, 2];

const result = numbers.filter(function(number) {
  return number % 2 === 0;
});

result.sort(function(a, b) {
  return a - b;
});

console.log(result); 