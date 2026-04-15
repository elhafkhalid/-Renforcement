const users = [
    { name: "Ali" }, 
    { name: "Sara" }, 
    { name: "Omar" }
];

users.forEach((element,i) => {
     console.log(`${i+1}) ${element["name"]}`);   
});


