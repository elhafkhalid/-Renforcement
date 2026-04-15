const commandes = [
  { id: 1, client: " Ali ", categorie: "Informatique", montant: 1200 },
  { id: 2, client: "Sara", categorie: "Maison", montant: 300 },
  { id: 3, client: "ali", categorie: "Informatique", montant: 1200 },
  { id: 4, client: "", categorie: "Maison", montant: 450 },
  { id: 5, client: "Omar", categorie: "Sport", montant: 0 },
  { id: 6, client: "Lina", categorie: "Maison", montant: 700 },
  { id: 7, client: "sara ", categorie: "Maison", montant: 300 },
  { id: 8, client: null, categorie: "Sport", montant: 900 },
];

function nettoyerCommandes(tableau) {
  return tableau
    .filter((e) => e.client && e.montant > 0)
    .map((e) => ({
      id: e.id,
      client: e.client.trim().toLowerCase(),
      categorie: e.categorie,
      montant: e.montant,
    }))
    .filter(
      (obj, index, arr) =>
        arr.findIndex(
          (val) =>
            obj.client === val.client &&
            obj.categorie === val.categorie &&
            obj.montant === val.montant,
        ) === index,
    );
}

const propres = nettoyerCommandes(commandes);

const triees = [...propres].sort((a,b) => b.montant - a.montant);

const plusChere = triees[0]

const total = triees.reduce((total,current) =>  total += current.montant,0);

const moyen = total/propres.length;

console.log(total);














