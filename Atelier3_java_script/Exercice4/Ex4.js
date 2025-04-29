const numbers = [1, 7, 10, 9, 8];

let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i]; 
  }
}

console.log(maxNumber); 
