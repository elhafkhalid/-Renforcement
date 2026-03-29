let catalogue = [
  { id: 1, nom: "Stylo bille", prix: 1.2, stock: 150 },
  { id: 2, nom: "Cahier A4", prix: 3.5, stock: 45 },
  { id: 3, nom: "Surligneur", prix: 2.1, stock: 80 },
  { id: 4, nom: "Post-it", prix: 3.8, stock: 60 },
  { id: 5, nom: "Ciseaux", prix: 6.3, stock: 20 },
];

// function ajouterProduit(tableau, produit) {
//   let maxID = 1;
//   for (let element of tableau) {
//     if (element.id > maxID) {
//       maxID = element.id;
//     }
//   }

//   const obj = {
//     id: maxID + 1,
//     ...produit,
//   };

//   return [...tableau, obj];
// }

function ajouterProduit(tableau, produit) {
  let maxID = 0;
  for (let element of tableau) {
    if (element.id > maxID) maxID = element.id;
  }

  const nvProduit = { id: maxID + 1 };
  for (let key in produit) {
    nvProduit[key] = produit[key];
  }

  const nvTab = tableau.slice();
  nvTab.push(nvProduit);
  return nvTab;
}

const obj = { nom: "khalid", prix: 100, stock: 300 };
//console.log(ajouterProduit(catalogue, obj));

function rechercherParNom(tableau, terme) {
  let newTab = [];
  const rechercher = terme.toLowerCase();
  for (let element of tableau) {
    if (element.nom.toLowerCase().includes(rechercher)) newTab.push(element);
  }
  return newTab;
}

//console.log(rechercherParNom(catalogue, "st"));

function modifierPrix(tableau, id, nPrix) {
  let newTab = [];
  for (let element of tableau) {
    if (element.id === id) {
      element = {
        ...element,
        prix: nPrix,
      };
      newTab.push(element);
    } else newTab.push(element);
  }
  return newTab;
}

//console.log(modifierPrix(catalogue, 3, 100));

function supprimerProduit(tableau, id) {
  let newTab = [];
  for (let element of tableau) {
    if (element.id !== id) newTab.push(element);
  }
  return newTab;
}

//console.log(supprimerProduit(catalogue, 3));
