function exerc1() {
  let taches = [];
  taches.push("codes");
  taches.push("tester");
  taches.push("deployer");

  taches.unshift("analyser");
  console.log(taches.pop());
  console.log(taches.shift());
  taches.splice(1, 0, "documenter");
  taches.splice(2, 1, "revue de code");
  console.log(taches);
}

function exerc2() {
  const prenoms = ["alice", "bob", "clara", "david", "eva"];
  let longueurs = [];

  prenoms.forEach((element, i) => {
    console.log(`${i + 1}. ${element}`);
    longueurs.push(element.length);
  });

  console.log(longueurs);

  prenoms.forEach((element) => {
    if (element.length > 3) console.log(element);
  });

  const prixTTC = prix.map((p) => p * 1.2);
  console.log(prixTTC);
  const prix = [10, 25, 8];
  const etiquettes = prix.map((p) => `${p}EUR`);
  console.log(etiquettes);
  console.log(prix);
}

function exerc3() {
  const temperatures = [0, 15, 22, 35, -5, 100];
  const fahrenheit = temperatures.map((t) => (t * 9) / 5 + 32);
  console.log(fahrenheit);

  const description = temperatures.map((t) => {
    if (t >= 30) return "chaud";
    if (t < 0) return "froid";
    else return "tempere";
  });
  console.log(description);

  const statistique = temperatures.map((t) => {
    let status;
    if (t >= 30) status = "chaud";
    else if (t < 0) status = "froid";
    else status = "tempere";

    return {
      celsius: t,
      statut: status,
    };
  });
}

function exerc4() {
  const mots = [
    "chat",
    "cheval",
    "chien",
    "lion",
    "chameau",
    "cobra",
    "loup",
    "chevre",
  ];

  const T1 = mots.filter((m) => m.startsWith("ch"));
  console.log(T1);
  const T2 = mots.filter((m) => m.length > 5);
  console.log(T2);
  const T3 = mots.filter((m) => m.startsWith("ch") && m.length > 5);
  console.log(T3);
}

function exerc5() {
  const catalogue = [
    { ref: "A01", nom: "Stylo bille", prix: 1.2 },
    { ref: "A02", nom: "Cahier A4", prix: 3.5 },
    { ref: "A03", nom: "Surligneur", prix: 2.1 },
    { ref: "A04", nom: "Post-it", prix: 3.8 },
    { ref: "A05", nom: "Ciseaux", prix: 6.3 },
  ];

  const produit = catalogue.find((c) => c.ref === "A03");
  console.log(produit);

  const index = catalogue.findIndex((c) => c.nom === "Cahier A4");
  console.log(index);

  const refA99 = catalogue.find((c) => c.ref === "A99");
  if (refA99) console.log(refA99);
  else console.log("produit avec ref = A99 est introuvable");
}

function exerc6() {
  const notes = [14, 8, 17, 11, 15, 9, 18, 12];
  const somme = notes.reduce((acc, n) => acc + n, 0);
  const moyen =
    notes.length === 0
      ? 0
      : notes.reduce((acc, n) => acc + n, 0) / notes.length;
  const max = notes.reduce((acc, n) => (acc > n ? acc : n), notes[0]);
  const auDessus1 = notes.reduce((acc, n) => acc + (n > moyen ? 1 : 0), 0);
  const auDessus2 = notes.filter((n) => n > moyen).length;
  console.log(somme);
  console.log(moyen);
  console.log(max);
  console.log(auDessus1);
}

function exerc7() {
  const scores = [45, 12, 78, 3, 99, 56, 23, 67];
  const noms = ["Zoe", "Alice", "Marc", "Bob", "Yasmine", "Chloe"];
  const sortedScore1 = [...scores].sort((a, b) => a - b);
  const sortedScore2 = scores.slice().sort((a, b) => a - b);
  console.log(sortedScore1);
  console.log(sortedScore2);

  const sortedScore3 = [...scores].sort((a, b) => b - a);
  console.log(sortedScore3);

  const sortedNoms = [...noms].sort((a, b) => a.localeCompare(b));
  console.log(sortedNoms);

  const sortedScore4 = [...scores].sort((a, b) => a - b).slice(0, 3);
  console.log(sortedScore4);
}

//exercI1
const T1 = [3, 1, 2, 1, 3, 0, "", 5, null, 2];
const T2 = [false, 7, 7, "", 8, undefined, 8];
const T3 = [0, 0, 0];

function nettoyer(T) {
  return T.filter((val) => val)
    .filter((val, index, arr) => arr.indexOf(val) === index)
    .sort((a, b) => a - b);
}
//console.log(nettoyer(T1));
//exercI2

const T4 = [1, 2, 3, 4, 5];
function rotate(T, n) {
  const L = T.length;
  n = n % L;
  const droit = T.slice(L - n);
  const gauche = T.slice(0, L - n);

  // return droit.concat(gauche);
  return [...droit, ...gauche];
}

//console.log(rotate(T, 2));

//exercI3
const T5 = [1, [2, 3], [4, [5, 6]]];

function flatten(tableau) {
  return tableau.reduce((acc, element) => {
    if (Array.isArray(element)) return acc.concat(...flatten(element));
    return acc.concat(element);
  }, []);
}

//console.log(flatten(T5));

//exercI4
const a = [1, 2, 2, 3, 3, 4];
const b = [2, 4, 6];

function intersection(a, b) {
  return a
    .filter((val) => b.includes(val)) // [2,2,4]
    .filter((val, index, arr) => arr.indexOf(val) === index);
}

//console.log(intersection(a, b));

function difference(a, b) {
  return a
    .filter((val) => !b.includes(val))
    .filter((val, index, arr) => arr.indexOf(val) === index);
}

//console.log(difference(a, b));

//exercI5

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

//console.log(groupBy(produits, "categorie"));
