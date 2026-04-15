const produits = [
  { nom: "Stylo", categorie: "ecriture", prix: 1.5 },
  { nom: "Cahier", categorie: "papier", prix: 3.5 },
  { nom: "Feutre", categorie: "ecriture", prix: 2.0 },
  { nom: "Post-it", categorie: "papier", prix: 3.8 },
  { nom: "Ciseaux", categorie: "bureau", prix: 6.5 },
];

function groupBy(tableau, cle) {
  return tableau.reduce((acc, element) => {
    const valeur = element[cle];
    if (!acc[valeur]) acc[valeur] = [];
    acc[valeur].push(element);
    return acc;
  }, {});
}

console.log(groupBy(produits,"categorie"));

