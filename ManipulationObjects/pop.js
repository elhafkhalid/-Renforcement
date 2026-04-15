const a = [1, 2, 3];
a.pop();
console.log(a);

a.pop();
console.log(a);


const test = ["a", "b", "c"];
function removeLast(arr) {
  let last = arr.pop();
  return last;
}


console.log(removeLast(test));
console.log(test);
