const commande = {
  id: "CMD-001",
  client: { nom: "Dupont", email: "dupont@mail.com" },
  total: 18.5,
  livree: false,
};
//let { id, total, client } = commande;
// console.log(id);
// console.log(total);
// console.log(client);
// total = 10;
// console.log(total); // donne 10

// console.log(commande.total); // ne change pas total est une copie de valeur
// client.nom = "AOO";
// console.log(commande.client.nom); // change car copie de reference
// console.log(commande);

// const { total: montant, livree: estlivree } = commande;
// console.log(montant);
// console.log(estlivree);

// const {client : {nom}} = commande;

// console.log(nom);

// const {client : {nom:prenom}} = commande
// console.log(prenom);


// function resumeCommande({id,client,total}){
//    console.log(` commande ${id} - ${client.nom} - ${total}` );
// }

// resumeCommande(commande);

// const {client} = commande;
// console.log(client.nom);





