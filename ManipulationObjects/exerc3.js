const commande = {
id: 'CMD-001',
client: { nom: 'Dupont', email: 'dupont@mail.com' },
total: 18.50,
livree: false
};


const {id,total} = commande;
console.log(id);
console.log(total);

const {client:{nom}} = commande;
console.log(nom);


const {total:motant,livree:estLivree} = commande
console.log(motant);
console.log(estLivree);

function resumeCommande({id,client,total}){
    console.log(`commande ${id} - ${client.nom} - ${total}`); 
}

resumeCommande(commande);



