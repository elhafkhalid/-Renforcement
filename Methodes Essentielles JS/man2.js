const students = [
  {
    id: 1,
    name: "Ali",
    age: 22,
    grades: [12, 15, null, [18, 12]],
  },
  {
    id: 2,
    name: "Sara",
    age: 27,
    grades: [10, 10, 14, [null, 16]],
  },
  {
    id: 3,
    name: "Yassine",
    age: 19,
    grades: [[8, 9], 10, null],
  },
  {
    id: 4,
    name: "Lina",
    age: 31,
    grades: [20, 18, [17, 20]],
  },
];

//PARTIE1
function nettoyer(tableau) {
  return tableau
    .filter((el) => el !== null)
    .filter((val, index, arr) => arr.indexOf(val) === index);
  // .sort((a, b) => a - b);
}

function flatten(tableau) {
  return tableau.reduce((acc, el) => {
    if (Array.isArray(el)) return acc.concat(flatten(el));
    return acc.concat(el);
  }, []);
}

function getAllGrades(tableau) {
  return nettoyer(flatten(tableau.map((el) => el.grades)));
}
//console.log(getAllGrades(students));

//PARTIE2
function getAverageStudent(student) {
  const grade = flatten(student.grades);
  const result = grade.reduce(
    (acc, el) => {
      if (el !== null) {
        acc.somme += el;
        acc.count++;
      }
      return acc;
    },

    {
      somme: 0,
      count: 0,
    },
  );

  return {
    ...student,
    moyen: result.somme / result.count,
  };
}

function getAverageStudents(tableau) {
  return tableau.map((student) => getAverageStudent(student));
}

//PARTIE3
const moyen = getAverageStudents(students);
//console.log(moyen);

function groubByPerformance(tableau) {
  return tableau.reduce(
    (acc, el) => {
      if (el.moyen < 10) acc.faible.push(el);
      else if (el.moyen <= 15) acc.excellent.push(el);
      else acc.moyen.push(el);
      return acc;
    },
    {
      faible: [],
      moyen: [],
      excellent: [],
    },
  );
}
//console.log(groubByPerformance(moyen));

//PARITE4
function rotateGrades(tableau, n) {
  return tableau.map((el) => rotateGrade(el, n));
}

function rotateGrade(el, n) {
  const grade = nettoyer(flatten(el.grades));

  n = n % grade.length;
  const droit = grade.slice(grade.length - n);
  const gauche = grade.slice(0, grade.length - n);

  return {
    name: el.name,
    grades: [...droit, ...gauche],
  };
}

console.log(rotateGrades(students, 2));
