const array = [1, 2, 3, 4, 5, 6, 7, 8];

// filter only even numbers
//multiply those filtered numbers by 10
//find sum

const result = array.filter(num => num % 2 === 0)
    .map(num => num * 10)
    .reduce((sum, num) => sum + num, 0);

console.log(result);
