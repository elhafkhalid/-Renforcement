const t = ["  ali ", " SARA", "", "  Omar  ", "   "];

function nettoyer(arr) {
  const result = [];
  for (element of arr) {
    let cleaned = element.trim().toLowerCase();
    if (cleaned !== "") result.push(cleaned);
  }
  return result;
}

console.log(nettoyer(t));
