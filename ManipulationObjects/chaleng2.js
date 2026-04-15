const T = [1, 2, 3, 4, 5];
function rotateleft(T, n) {
  const L = T.length;
  if (L === 0) return [];
  n = n % L;
  const gauche = T.slice(0,n);
  const droit = T.slice(n);

  return [...droit,...gauche];
}

console.log(rotateleft(T,7));



