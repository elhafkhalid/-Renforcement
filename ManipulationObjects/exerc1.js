const fiche = { prenom:'Bob', nom:'Dupont', age:34, ville:'Lyon' };
console.log(`${fiche.prenom}  ${fiche.nom}`);
console.log(fiche.nom + " " + fiche.prenom );

function getProperty1(obj,cle){
  if(cle in obj) return obj[cle];
  return "incon";
}
function getProperty2(obj,cle){
  if(obj.hasOwnProperty(cle)) return obj[cle];
  return "incon";
}
console.log(getProperty1(fiche,"salaire"));
console.log(getProperty2(fiche,"ville"));


function renommerCle(obj,ancien,nouvel){
   const copie = {...obj};
   copie[nouvel] = obj[ancien];
   delete copie[ancien];
   return copie;
}

console.log(renommerCle(fiche,"age","myage"));
console.log(fiche);








