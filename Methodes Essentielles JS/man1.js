const users = [
  {
    id: 1,
    name: "Ali",
    age: 25,
    scores: [10, 20, 10, [10, 40, 50]],
  },
  { id: 2, name: "Sara", age: 19, scores: [15, 15, null, 10, 8, 9, 12] },
  { id: 3, name: "Ali", age: 23, scores: [null, 5, 5, 8, 10, 3, 2, 1] },
  { id: 4, name: "Sara", age: 30, scores: [20, 30, 20, 3, 8, 6] },
];

//PARTIE1
function flatten(tableau) {
  return tableau.reduce((acc, el) => {
    if (Array.isArray(el)) return acc.concat(flatten(el));
    return acc.concat(el);
  }, []);
}

function nettoyer(tableau) {
  return tableau
    .filter((el) => el !== null)
    .filter((val, index, arr) => arr.indexOf(val) === index);
}

function getAllScores(tableau) {
  return nettoyer(flatten(tableau.map((el) => el.scores)));
}



//PARTIE2
function getAverageUser(user) {
  const score = flatten(user.scores);

  const result = score.reduce(
    (acc, el) => {
      if (el !== null) {
        acc.somme += el;
        acc.count++;
      }
      return acc;
    },
    { somme: 0, count: 0 },
  );
  return {
    name: user.name,
    moyen: result.somme / result.count,
  };
}

function getAverageScores(users) {
  return users.map((user) => getAverageUser(user));
}
//console.log(getAverageScores(users));


//PARTIE3
function groubBy(tableau, cle) {
  return tableau.reduce((acc, el) => {
    const valeur = el[cle];
    if (!acc[valeur]) acc[valeur] = [];
    acc[valeur].push(el);
    return acc;
  }, {});
}
//console.log(groubBy(users, "name"));

function groubByAge(tableau) {
  return tableau.reduce(
    (acc, el) => {
      if (el.age < 20) acc.jeune.push(el);
      else if (el.age >= 30) acc.senior.push(el);
      else acc.adulte.push(el);
      return acc;
    },
    { jeune: [], adulte: [], senior: [] },
  );
}
//console.log(groubByAge(users));


//PARTIE4
function rotateUser(user, n) {
  const score = nettoyer(flatten(user.scores));
  n = n % score.length;
  const droit = score.slice(score.length - n);
  const gauche = score.slice(0, score.length - n);

  return {
    name: user.name,
    scores: [...droit, ...gauche],
  };
  //return score;
}

function rotateUsers(users, n) {
  return users.map((el) => rotateUser(el, n));
}
console.log(rotateUsers(users, 2));
