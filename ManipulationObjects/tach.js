const tasks = ["email", "meeting", "code"];

function addPriority(tasks, task) {
  const index = tasks.indexOf(task);
  if (index !== -1) tasks.splice(index, 1);
  tasks.unshift(task);
}

addPriority(tasks, "task1");
console.log(tasks);

addPriority(tasks,"meeting");
console.log(tasks);

