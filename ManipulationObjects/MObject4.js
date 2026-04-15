let catalogue = [
  { id: 1, nom: "Stylo bille", prix: 1.2, stock: 150 },
  { id: 2, nom: "Cahier A4", prix: 3.5, stock: 45 },
  { id: 3, nom: "Surligneur", prix: 2.1, stock: 80 },
  { id: 4, nom: "Post-it", prix: 3.8, stock: 60 },
  { id: 5, nom: "Ciseaux", prix: 6.3, stock: 20 },
];

function ajouterProduit(tableau, produit) {
  //   const maxId = tableau.reduce((acc, e) => {
  //     return e.id > acc ? e.id : acc;
  //   }, 0);

  let maxID = 0;
  for (let element of tableau) {
    if (element.id > maxID) {
      maxID = element.id;
    }
  }

  const newObj = {
    id: maxID + 1,
    //...produit,
  };

  for (let key in produit) {
    newObj[key] = produit[key];
  }

  return [...tableau, newObj];
  //tableau.push(newObj);
}

const obj = { nom: "sty", prix: 9, stock: 9 };
const copie = { id: 5, ...obj };
//console.log(copie);

console.log(ajouterProduit(catalogue, obj));

function rechercherParNom(tableau, terme) {
  //   return tableau.filter((e) =>
  //     e.nom.toLowerCase().includes(terme.toLowerCase()),
  //   );

  const resultat = [];
  //   const rechercher = terme.toLowerCase();
  //   for (let i = 0; i < tableau.length; i++) {
  //     const nomProduit = tableau[i].nom.toLowerCase();
  //     if (nomProduit.includes(rechercher)) resultat.push(tableau[i]);
  //   }

  //   for (const article of tableau) {
  //     if (article.nom.toLowerCase().includes(terme.toLowerCase()))
  //       resultat.push(article);
  //   }

  return resultat;
}

//console.log(rechercherParNom(catalogue, "st"));

function modifierPrix(tableau, id, newPrice) {
  //   return tableau.map((element) => {
  //     return element.id === id ? { ...element, prix: newPrice } : element;
  //   });
  //   return tableau.map((element) => {
  //     if(element.id === id) return {...element,prix:newPrice};
  //     return element;
  //   });
  //   return tableau.map((element) =>
  //     element.id === id ? { ...element, prix: newPrice } : element,
  //   );
  //   let newTab = [];
  //   for(let element of tableau){
  //     if(element.id === id){
  //         newTab.push({
  //             ...element,
  //             prix : newPrice
  //         })
  //     }else newTab.push(element);
  //   }
  //   return newTab;
  //   let newTab = [];
  //   for (let index in tableau) {
  //     const element = tableau[index];
  //     if (element.id === id) {
  //       newTab.push({
  //         ...element,
  //         prix: newPrice,
  //       });
  //     } else newTab.push(element);
  //   }
  //   return newTab;
}
//console.log(modifierPrix(catalogue, 1, 200));

const obj2 = {
  prix: 23,
  prix: 10,
};

//console.log(obj2);

function supprimerProduit(tableau, id) {
  //return tableau.filter((e) => e.id !== id);
  let newTab = [];
  //   for (let element of tableau) {
  //     if (element.id !== id) {
  //       newTab.push(element);
  //     }
  //   }

  for (let index in tableau) {
    const element = tableau[index];
    if (element.id !== id) {
      newTab.push(element);
    }
  }

  return newTab;
}

// console.log(supprimerProduit(catalogue, 5));
// console.log(catalogue);
