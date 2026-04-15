const products = [
  {
    id: 1,
    name: "Laptop",
    category: "tech",
    price: 1200,
    stock: 5,
    rating: 4.7,
  },
  { id: 2, name: "Mouse", category: "tech", price: 25, stock: 50, rating: 4.2 },
  {
    id: 3,
    name: "Keyboard",
    category: "tech",
    price: 70,
    stock: 0,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Desk",
    category: "furniture",
    price: 300,
    stock: 10,
    rating: 4.3,
  },
  {
    id: 5,
    name: "Chair",
    category: "furniture",
    price: 150,
    stock: 20,
    rating: 4.1,
  },
  {
    id: 6,
    name: "Lamp",
    category: "furniture",
    price: 45,
    stock: 15,
    rating: 3.9,
  },
  { id: 7, name: "Phone", category: "tech", price: 800, stock: 8, rating: 4.8 },
  {
    id: 8,
    name: "Notebook",
    category: "stationery",
    price: 5,
    stock: 100,
    rating: 4.0,
  },
  {
    id: 9,
    name: "Pen",
    category: "stationery",
    price: 2,
    stock: 200,
    rating: 3.8,
  },
];

function getAvailableProducts(tableau) {
  return tableau.filter((element) => element.stock > 0);
}

//console.log(getAvailableProducts(products));

function getProductsAbovePrice(tableau, value) {
  return tableau.filter((element) => element.price > value);
}

//console.log(getProductsAbovePrice(products,100));

function getTotalStockValue(tableau) {
  return tableau.reduce(
    (acc, element) => (acc += element.price * element.stock),
    0,
  );
}

//console.log(getTotalStockValue(products));

function getTopRated(tableau) {
  return [...tableau].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

//console.log(getTopRated(products));


function getMostValuableProduct(tableau) {
  let max = tableau[0].price * tableau[0].stock;

  tableau.forEach((element) => {
    const value = element.stock * element.price;
    if (value > max) max = value;
  });

  return max;
}
//console.log(getMostValuableProduct(products));

function groupByCategory(tableau) {
  return tableau.reduce((acc, element) => {
    const value = element["category"];
    if (!acc[value]) acc[value] = [];
    acc[value].push(element);
    return acc;
  }, {});
}

let obj = groupByCategory(products);
//console.log(groupByCategory(products,"category"));

function getBestCategory(obj) {
  let max = 0;
  let result = [];
  for (let cle in obj) {
    max = obj[cle].reduce((acc, element) => {
      return (acc += element.rating);
    }, 0);
    result.push(max);
  }
  return result.sort((a, b) => a - b).slice(2);
}

console.log(getBestCategory(obj));
