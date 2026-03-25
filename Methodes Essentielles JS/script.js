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


