const commande = {
  id: "CMD-001",
  client: { nom: "Dupont", email: "dupont@mail.com" },
  total: 18.5,
  livree: false,
};
//Q1
// let id = commande.id;
// const total = commande.total;
const { id, total } = commande;
//console.log(id, total);

//Q2
const {
  client: { nom },
} = commande;
//console.log(nom);
//Q3
const { total: montant, livree: estLivree } = commande;
console.log(estLivree,montant);
