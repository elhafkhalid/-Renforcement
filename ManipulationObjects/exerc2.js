const inventaire = {
  stylo: { prix: 1.5, stock: 200 },
  cahier: { prix: 3.5, stock: 85 },
  regle: { prix: 0.8, stock: 0 },
  compas: { prix: 8.5, stock: 12 },
};

//Q1
// console.log(Object.keys(inventaire)); //affiche tableau ["","","",""]

// for (let produit in inventaire) {
//   console.log(produit);
// }

// Object.entries(inventaire).forEach(([cle,article]) => {
//     console.log(cle);
// });

//Q2
let total = 0;
// for(let produit in inventaire){
//    total += inventaire[produit].prix*inventaire[produit].stock;
// }

const T = Object.values(inventaire);

// for (let i = 0; i < T.length; i++) {
//   total += T[i].prix * T[i].stock;
// }

// T.forEach((Element)=>{
//     total += Element.prix * Element.stock;
// })

//console.log(total);

//Q3
const obj = {};
for (let Element in inventaire) {
  obj[Element] = inventaire[Element].prix;
}
//console.log(obj);

const obj1 = Object.keys(inventaire).reduce((acc, Element) => {
  acc[Element] = inventaire[Element].prix;
  return acc;
}, {});

//console.log(obj1);
const obj3 = {}
for(const [nom,article] of Object.entries(inventaire)){
   obj3[nom] = article.prix;
}
console.log(obj3);



