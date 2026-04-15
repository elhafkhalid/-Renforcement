const history = [] 
function addAction(history,action){
   history.push(action);
   return history;
}

addAction(history,"action1");
addAction(history,"action2");
addAction(history,"action3");

console.log(history);

function undo(history){
   if(history.length === 0) return null;
   return history.pop(); 
}

console.log(undo(history));

console.log(history);

console.log(undo(history));

console.log(undo(history));

console.log(undo(history));

