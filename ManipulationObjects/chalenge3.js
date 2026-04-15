const T = [1, [2, 3], [4, [5, 6]]];
// function flatten(tableau) {
//   return tableau.reduce((acc, element) => {
//     if (Array.isArray(element)) return acc.concat(flatten(element));
//     return acc.concat(element);
//   }, []);
// }

function flatten(tableau) {
  return tableau.reduce(
    (acc, element) =>
      Array.isArray(element)
        ? [...acc, flatten(element)]
        : [...acc, element],
    [],
  );
}

console.log(flatten(T));
