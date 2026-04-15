const a = [1,2,3];

// function reverseCopy(arr){
//    return [...arr].reverse();
// }

function reverseCopy(arr){
   const copy = arr.slice();
   return copy.reverse();
}

console.log(reverseCopy(a));
console.log(a);



