const recent = [];

function addRecent(recent, item) {
  const index = recent.indexOf(item);
  if (index !== -1) recent.splice(index, 1);
  recent.unshift(item);
  if (recent.length === 5) recent.pop();
  
}

addRecent(recent, "A");
addRecent(recent, "B");
addRecent(recent, "C");
addRecent(recent, "D");
addRecent(recent, "E");
addRecent(recent, "F");
addRecent(recent, "G");
addRecent(recent, "E");




console.log(recent);
