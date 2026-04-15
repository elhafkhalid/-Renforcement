const messages = ["m1","m2","m3"];

function inverser(messages){
    return [...messages].reverse();
}

function inverser(messages){
    return messages.slice().reverse();  
}

console.log(inverser(messages));
console.log(messages);

