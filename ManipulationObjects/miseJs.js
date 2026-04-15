const flotte = [
  {
    id: 1,
    marque: "Toyota",
    modele: "Yaris",
    cat: "citadine",
    prix_jour: 35,
    km: 42000,
    note: 4.2,
    disponible: true,
  },
  {
    id: 2,
    marque: "Toyota",
    modele: "Corolla",
    cat: "berline",
    prix_jour: 55,
    km: 28000,
    note: 4.6,
    disponible: true,
  },
  {
    id: 3,
    marque: "Renault",
    modele: "Clio",
    cat: "citadine",
    prix_jour: 30,
    km: 75000,
    note: 3.8,
    disponible: false,
  },
  {
    id: 4,
    marque: "Renault",
    modele: "Megane",
    cat: "berline",
    prix_jour: 50,
    km: 15000,
    note: 4.8,
    disponible: true,
  },
  {
    id: 5,
    marque: "Peugeot",
    modele: "208",
    cat: "citadine",
    prix_jour: 32,
    km: 60000,
    note: 4.0,
    disponible: true,
  },
  {
    id: 6,
    marque: "Peugeot",
    modele: "3008",
    cat: "SUV",
    prix_jour: 80,
    km: 22000,
    note: 4.7,
    disponible: true,
  },
  {
    id: 7,
    marque: "BMW",
    modele: "Serie 3",
    cat: "berline",
    prix_jour: 110,
    km: 8000,
    note: 4.9,
    disponible: true,
  },
  {
    id: 8,
    marque: "BMW",
    modele: "X3",
    cat: "SUV",
    prix_jour: 130,
    km: 5000,
    note: 4.8,
    disponible: false,
  },
  {
    id: 9,
    marque: "Ford",
    modele: "Kuga",
    cat: "SUV",
    prix_jour: 75,
    km: 38000,
    note: 4.3,
    disponible: true,
  },
  {
    id: 10,
    marque: "Ford",
    modele: "Fiesta",
    cat: "citadine",
    prix_jour: 28,
    km: 90000,
    note: 3.6,
    disponible: true,
  },
  {
    id: 11,
    marque: "Tesla",
    modele: "Model 3",
    cat: "berline",
    prix_jour: 95,
    km: 12000,
    note: 4.9,
    disponible: true,
  },
  {
    id: 12,
    marque: "Tesla",
    modele: "Model Y",
    cat: "SUV",
    prix_jour: 115,
    km: 6000,
    note: 5.0,
    disponible: true,
  },
  {
    id: 13,
    marque: "Volkswagen",
    modele: "Golf",
    cat: "berline",
    prix_jour: 58,
    km: 45000,
    note: 4.1,
    disponible: false,
  },
  {
    id: 14,
    marque: "Volkswagen",
    modele: "Tiguan",
    cat: "SUV",
    prix_jour: 88,
    km: 19000,
    note: 4.5,
    disponible: true,
  },
  {
    id: 15,
    marque: "Hyundai",
    modele: "Tucson",
    cat: "SUV",
    prix_jour: 70,
    km: 31000,
    note: 4.4,
    disponible: true,
  },
];

function filterSelonDisp(tableau) {
  return tableau
    .filter((element) => element.disponible === true)
    .map((element) => ({
      label: element.marque,
      prix5j: element.prix_jour * 5,
      remise: element.km > 50000 ? element.km * 0.08 : 0,
      prixFinal:
        element.prix_jour * 5 -
        element.prix_jour * (element.km > 50000 ? 0.08 : 0),
    }));
}

//console.log(filterSelonDisp(flotte));

function grouperParCategorie(tableau) {
  let result = tableau.reduce((acc, element) => {
    const value = element["cat"];
    if (!acc[value]) {
      acc[value] = {
        nbTotal: 0,
        nbDisponibles: 0,
        prixMoyen: 0,
        noteMoyenne: 0,
        prixTotal: 0,
        noteTotal: 0,
      };
    }

    acc[value].nbTotal++;
    if (element.disponible) acc[value].nbDisponibles++;
    acc[value].prixTotal += element.prix_jour;
    acc[value].noteTotal += element.note;
    return acc;
  }, {});

  for (let cat in result) {
    let data = result[cat];
    data.prixMoyen = data.prixTotal / data.nbTotal;
    data.noteMoyenne = data.noteTotal / data.nbTotal;
  }

  return result;
}

//console.log(grouperParCategorie(flotte));

// Construire un objet groupé par catégorie. Pour chaque catégorie calculer :
//      — nbTotal        : nombre de véhicules dans la catégorie
//      — nbDisponibles  : nombre disponibles
//      — prixMoyen      : moyenne des prix_jour (tous véhicules, disponibles ou non)
//      — noteMoyenne    : moyenne des notes, arrondie à 1 décimale
//      — tauxDispo      : (nbDisponibles / nbTotal × 100), arrondi

setTimeout(function () {
    console.log("lkjhgtyui");
    
},2000)

