const inventaire = {
  stylo: { prix: 1.5, stock: 200 },
  cahier: { prix: 3.5, stock: 85 },
  regle: { prix: 0.8, stock: 0 },
  compas: { prix: 8.5, stock: 12 },
};

//Q1
//console.log(Object.keys(inventaire));

// for(let key in inventaire){
//   console.log(key);
// }

// Object.entries(inventaire).forEach(([key, value]) => {
//   console.log(key);
// });

//Q2
let total = 0;
// for (let key in inventaire) {
//   total += inventaire[key].prix * inventaire[key].stock;
// }

const T = Object.values(inventaire);
// for (let i = 0; i < T.length; i++) {
//   total += T[i].prix * T[i].stock;
// }

//T.forEach((article) => (total += article.prix * article.stock));

// for (let article of T) {
//   total += article.prix * article.stock;
// }

//console.log(total);

//Q3
const obj = {};
for (let key in inventaire) {
  obj[key] = inventaire[key].prix;
}
//console.log(obj);

const obj1 = Object.keys(inventaire).reduce((acc, e) => {
  acc[e] = inventaire[e].prix;
  return acc;
}, {});

const obj12 = Object.keys(inventaire).reduce(
  (acc, e) => ((acc[e] = inventaire[e].prix), acc),
  {},
);
//console.log(obj1);

const obj2 = {};
for (const [key, article] of Object.entries(inventaire)) {
  obj2[key] = article.prix;
}
//console.log(obj2);

const obj19 = {};

// for(let key in inventaire){
//   obj19[key] = inventaire[key].prix;
// }

Object.keys(inventaire).forEach((element) => {
  obj19[element] = inventaire[element].prix;
  return obj19;
});

Object.entries(inventaire).forEach(
  ([key, article]) => (obj19[key] = article.prix),
);

const obj39 = Object.fromEntries(
  Object.entries(inventaire).map(([key, article]) => [key, article.prix]),
);
console.log(obj39);

//console.log(obj19);
