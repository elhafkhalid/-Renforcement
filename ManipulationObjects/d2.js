let fruits = ["pomme", "banane", "orange"];
console.log(fruits[1]);

let couleurs = ["rouge", "bleu", "vert"];
couleurs.push("violet");
console.log(couleurs.length);

personne = {
  nom: "alice",
  age: 25,
  ville: "paris",
};
console.log(personne["nom"]);
console.log(personne.nom);

let animaux = ["chat", "chien", "lapin", "tortue"];
for (animal of animaux) {
  console.log(animal);
}

let tableau = [
  {
    nom: "pain",
    prix: 100,
  },

  {
    nom: "lait",
    prix: 200,
  },

  {
    nom: "oeuf",
    prix: 50,
  },
];

let total = 0;
for(t of tableau){
  total += t.prix;
}
console.log(total);


let produits = {
    nom : "p1",
    prix : 200,
    categorie : "boisson",
}
console.log(`le produit cafe coute ${produits.prix} euros (categorie : ${produits.categorie})`);

