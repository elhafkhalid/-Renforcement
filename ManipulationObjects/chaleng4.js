const a = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const b = [1, 2, 3, 4];

function intersection(a, b) {
  return a
    .filter((val) => b.includes(val)) // [1,2,2,3,4]
    .filter((val, index, arr) => arr.indexOf(val) === index)
    .sort((a, b) => b - a);
}

function difference(a, b) {
  return a.filter((val) => !b.includes(val)) // [5,5,5,6]
  .filter((val, index, arr) => arr.indexOf(val) === index);
}

//console.log(intersection(a, b));
console.log(difference(a, b));




