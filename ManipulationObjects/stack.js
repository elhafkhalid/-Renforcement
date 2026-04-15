const stack = [];

function go(stack,page){
   stack.push(page);
   return stack;
}

function back(stack){
   if(stack.length === 0) return null;
   return stack.pop();
}