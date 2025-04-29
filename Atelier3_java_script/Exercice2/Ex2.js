
const numbers = [1, 3, 4];

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const result = numbers.map(function(num) {
  return factorial(num);
});

console.log(result); 
