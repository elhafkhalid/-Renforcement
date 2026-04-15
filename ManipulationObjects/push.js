const a = [1,2];
a.push(3);
a.push(4);
console.log(a);

const names = [];
names.push("aaa");
names.push('bbbb');
names.push('cccc');
console.log(names);

function addIfPositive(arr,n){
  if(n>0) arr.push(n);
  return arr;
}
console.log(addIfPositive([],-1));
