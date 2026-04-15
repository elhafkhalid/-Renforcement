const queue = [];

function enqueue(queue,ticket){
    queue.push(ticket);
}

enqueue(queue,"t1");
enqueue(queue,"t2");
enqueue(queue,"t3");
console.log(queue);

function dequeue(queue){
   if(queue.length === 0) return null;
   return queue.shift();
}

console.log(dequeue(queue));
console.log(queue);

console.log(dequeue(queue));
console.log(dequeue(queue));
console.log(dequeue(queue));




