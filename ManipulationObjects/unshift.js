function addToStart(arr,value){
   arr.unshift(value);
   return arr;
}

const arr = ["a","b"];
console.log(addToStart(arr,"c"));
