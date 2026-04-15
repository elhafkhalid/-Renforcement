let catalogue = [
  { id: 1, nom: "Stylo bille", prix: 1.2, stock: 150 },
  { id: 2, nom: "Cahier A4", prix: 3.5, stock: 45 },
  { id: 3, nom: "Surligneur", prix: 2.1, stock: 80 },
  { id: 4, nom: "Post-it", prix: 3.8, stock: 60 },
  { id: 5, nom: "Ciseaux", prix: 6.3, stock: 20 },
];

function ajouterProduit(tableau, produit) {
  const maxID = tableau.reduce((acc, e) => (e.id > acc ? e.id : acc), 0);
  const nvObj = {
    id: maxID + 1,
    ...produit,
  };

  return [...tableau, nvObj];
}
const obj = { nom: "khalid", prix: 100, stock: 300 };
//console.log(ajouterProduit(catalogue, obj));

function rechercherParNom(tableau, terme) {
  const rechercher = terme.toLowerCase();
  return tableau.filter((e) => e.nom.toLowerCase().includes(rechercher));
}

//console.log(rechercherParNom(catalogue, "st"));

function modifierPrix(tableau, id, nvPrix) {
  return tableau.map((e) => (e.id === id ? { ...e, prix: nvPrix } : e));
}

//console.log(modifierPrix(catalogue, 4, 300));

function supprimerProduit(tableau, id) {
  return tableau.filter((e) => e.id !== id);
}

//console.log(supprimerProduit(catalogue, 2));
