let catalogue = [
  {
    id: 1,
    nom: "Stylo bille bleu",
    cat: "ecriture",
    prix: 1.2,
    stock: 150,
    note: 4.2,
  },
  {
    id: 2,
    nom: "Stylo bille rouge",
    cat: "ecriture",
    prix: 1.2,
    stock: 0,
    note: 4.0,
  },
  {
    id: 3,
    nom: "Stylo gel noir",
    cat: "ecriture",
    prix: 2.5,
    stock: 60,
    note: 4.7,
  },
  {
    id: 4,
    nom: "Cahier A4 200p",
    cat: "papier",
    prix: 5.5,
    stock: 45,
    note: 4.8,
  },
  {
    id: 5,
    nom: "Cahier A5 100p",
    cat: "papier",
    prix: 3.2,
    stock: 80,
    note: 4.3,
  },
  {
    id: 6,
    nom: "Bloc-notes A5",
    cat: "papier",
    prix: 2.8,
    stock: 30,
    note: 3.9,
  },
  {
    id: 7,
    nom: "Surligneur jaune",
    cat: "ecriture",
    prix: 1.8,
    stock: 0,
    note: 4.5,
  },
  {
    id: 8,
    nom: "Surligneur rose",
    cat: "ecriture",
    prix: 1.8,
    stock: 20,
    note: 4.3,
  },
  {
    id: 9,
    nom: "Ciseaux bureau",
    cat: "bureau",
    prix: 6.5,
    stock: 8,
    note: 3.7,
  },
  { id: 10, nom: "Agrafeuse", cat: "bureau", prix: 9.9, stock: 5, note: 4.1 },
  {
    id: 11,
    nom: "Post-it jaunes",
    cat: "papier",
    prix: 4.2,
    stock: 60,
    note: 4.6,
  },
  {
    id: 12,
    nom: "Agenda 2025",
    cat: "agenda",
    prix: 12.0,
    stock: 15,
    note: 4.7,
  },
  {
    id: 13,
    nom: "Marqueur permanent",
    cat: "ecriture",
    prix: 3.1,
    stock: 35,
    note: 4.4,
  },
  { id: 14, nom: "Regle 30cm", cat: "bureau", prix: 1.5, stock: 90, note: 3.8 },
  {
    id: 15,
    nom: "Compas de precision",
    cat: "bureau",
    prix: 8.9,
    stock: 12,
    note: 4.6,
  },
];

// function getAvailableProduct(catalogue) {
//      return catalogue.filter(cata => {
//         cata.stock > 0;
//     });

// }

function getAvailableProduct(tableau) {
  // return tableau.filter(product => {
  //     return product.stock > 0;
  // });
  // let products = [];
  // tableau.forEach(Element => {
  //     if(Element.stock > 0)
  //     products.push(Element);
  // })
  // return products;
}

//console.log(getAvailableProduct(catalogue));

// function productsByCategory(catalogue, category) {
//     let newCatalogue = catalogue.filter(cata => {
//         cata.cat === category;
//     });
//     return newCatalogue;

// }

function returnCle(tableau, value) {
  for (let i = 0; i < tableau.length; i++) {
    const obj = tableau[i];
    for (let cle in obj) {
      if (obj[cle] === value) return cle;
    }
  }
}

function productsByCategory(tableau, value) {
  // return tableau.filter(obj =>
  //     obj.cat === Valuecle
  // )

  let result = [];
  for (let i = 0; i < tableau.length; i++) {
    // const cle = returnCle(tableau, value);
    const obj = tableau[i];
    if (obj[cle] === value) {
      result.push(obj);
    }
  }
  return result;
}

//console.log(productsByCategory(catalogue,1.8));

function getTotalAmount(catalogue) {
  let total = 0;
  catalogue.forEach((cata) => {
    total += cata.prix * cata.stock;
  });
  return total;
}

function getTotalAmount(tableau) {
  //   return tableau.reduce((acc, element) => {
  //     return (acc += element.prix * element.stock);
  //   },0);

  let somme = 0;
  let max = tableau[0].prix * tableau[0].stock;
  tableau.forEach((element) => {
    somme = element.prix * element.stock;
    if (somme > max) {
      max = somme;
    }
  });

  return max;
}

//console.log(getTotalAmount(catalogue));

function palceOrder(catalogue, id, quantity) {
    let orders = [];
    catalogue.map((cat) => {
    if (cat.id == id && cat.stock > quantity) {
      cat.stock = cat.stock - quantity;
      orders.push(cat);
    }
  });
  return orders;
}

// function getProduct(tableau,id,qte){
//     return tableau.reduce((acc,element) => {
//         if(element.id === id && element.stock >= qte){
//             element.stock -= qte;
            
//             acc.push(element);
//         }
//         return acc;
//     }
//     ,[])
// }

//console.log(getProduct(catalogue, 1, 2));

function highest3(catalogue) {
  let highest3 = [];
  let newCatalogue = catalogue.sort((a, b) => {
    b.note - a.note;
  });
  highest3.push(newCatalogue[0]);
  highest3.push(newCatalogue[1]);
  highest3.push(newCatalogue[2]);
  return highest3;
}

//console.log(highest3(catalogue));

function sortByNote(tableau){
    return tableau.sort((a,b) => b.note-a.note).slice(0,3);
}

