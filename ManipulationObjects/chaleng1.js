const utilisateurs = [
  "Ali",
  "",
  "Sara",
  "Ali",
  null,
  "Omar",
  "  ",
  "sara",
  "Lina",
  undefined,
  "Omar",
];

function nettoyerUtilisateurs(U) {
  return U.filter((u) => typeof u === "string")
    .map((u) => u.trim().toLowerCase())
    .filter((u) => Boolean(u))
    .filter((val, index, arr) => arr.indexOf(val) === index)
    .sort((a, b) => a.localeCompare(b));
}
//console.log(nettoyerUtilisateurs(utilisateurs));

const produits = [
  { nom: "  Stylo  ", prix: 1.2 },
  { nom: "Cahier", prix: 3.5 },
  { nom: "stylo", prix: 1.2 },
  { nom: "  Gomme", prix: 0 },
  { nom: "", prix: 2 },
  { nom: "Règle", prix: null },
  { nom: "cahier ", prix: 3.5 },
  { nom: "Feutre", prix: 2.8 },
];

function nettoyerProduits(P) {
  return P.filter((p) => p.nom !== "" && p.prix).map((p) => ({
    nom: p.nom.trim().toLowerCase(),
    prix: p.prix,
  }))
  .filter(
    (obj, index, arr) =>
      arr.findIndex((p) => p.nom === obj.nom && p.prix === obj.prix) ===
      index,
  )
  .sort((a, b) => b.prix - a.prix);
}

//console.log(nettoyerProduits(produits));

const commandes = [
  { client: "  Ali ", montant: 120 },
  { client: "Sara", montant: 80 },
  { client: "ali", montant: 120 },
  { client: "", montant: 50 },
  { client: "Omar", montant: 0 },
  { client: "  LINA", montant: 200 },
  { client: "sara ", montant: 80 },
  { client: "Youssef", montant: null },
];

function nettoyerCommandes(T) {
  return T.filter((t) => t.montant > 0 && t.client !== "") 
    .map((t) => ({
      client: t.client.trim().toLowerCase(),
      montant: t.montant,
    }))
    .sort((a, b) => b.montant - a.montant)
    .filter(
      (obj, index, arr) =>
        arr.findIndex(
          (t) => t.client === obj.client && t.montant === obj.montant,
        ) === index,
    );
}
console.log(nettoyerCommandes(commandes));


const T = [3, 1, 2, 1, 3, 0, "", 5, null, 2];
function nettoyer(tableau) {
  return tableau
    .filter((val) => val !== "" && val !== null)
    .sort((a, b) => a - b)
    .filter((val, index, arr) => arr.indexOf(val) === index);
}

//console.log(nettoyer(T));

const etudiants = [
  { nom: "  Ali ", note: 14 },
  { nom: "Sara", note: 9 },
  { nom: "ali", note: 14 },
  { nom: "", note: 12 },
  { nom: "Omar", note: 0 },
  { nom: "  LINA", note: 18 },
  { nom: "sara ", note: 9 },
  { nom: "Youssef", note: null },
];

function nettoyerEtudiants(E) {
  return E.filter((e) => e.nom !== "" && e.note > 0)
    .map((e) => ({
      nom: e.nom.trim().toLowerCase(),
      note: e.note,
    }))
    .filter(
      (obj, index, arr) =>
        arr.findIndex((e) => e.nom === obj.nom && e.note === obj.note) ===
        index,
    )
    .sort((a, b) => b.note - a.note);
}

//console.log(nettoyerEtudiants(etudiants));
