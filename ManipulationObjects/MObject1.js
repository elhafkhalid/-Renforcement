const fiche = { prenom: "Bob", nom: "Dupont", age: 34, ville: "Lyon" };
const nomComplet = fiche.nom + "  " + fiche.prenom;
// console.log(nomComplet);
// console.log(`${fiche.nom}  ${fiche.prenom}`);

function getProp1(obj, cle) {
  if (cle in obj) return obj[cle];
  return "incon";
}

function getProp2(obj, cle) {
  if (obj.hasOwnProperty(cle)) return obj[cle];
  return "incon";
}

// console.log(getProp1(fiche, "nom"));
// console.log(getProp2(fiche, "nom"));

function renommerCle(obj, ancienne, nouvel) {
  copie = {...obj};
  copie[nouvel] = obj[ancienne];
  delete copie[ancienne];
  return copie;
}

console.log(renommerCle(fiche,"age","myage"));
console.log(fiche);




