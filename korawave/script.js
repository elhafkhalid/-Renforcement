const matchs = [
  {
    id: 1,
    equipe1: "FC KOORAWAVE",
    equipe2: "Raja Club",
    date: "15/03/2025",
    heure: "20:00",
    stade: "Stade Mohammed V",
    prix: { tribune: 200, virage: 100, pelouse: 50 },
  },
  {
    id: 2,
    equipe1: "FC KOORAWAVE",
    equipe2: "Wydad AC",
    date: "22/03/2025",
    heure: "18:00",
    stade: "Stade Mohammed V",
    prix: { tribune: 250, virage: 120, pelouse: 60 },
  },
  {
    id: 3,
    equipe1: "FC KOORAWAVE",
    equipe2: "AS FAR",
    date: "05/04/2025",
    heure: "21:00",
    stade: "Stade Mohammed V",
    prix: { tribune: 300, virage: 150, pelouse: 80 },
  },
];

const reservationsTest = [
  {
    matchId: 1,
    categorie: "tribune",
    nbrTicket: 3,
  },
  {
    matchId: 2,
    categorie: "virage",
    nbrTicket: 4,
  },
  {
    matchId: 3,
    categorie: "pelouse",
    nbrTicket: 2,
  },
];

let reservations = [];

// question26();
// question27();
// quetion28();
// console.log(getMatchById(3));
// console.log(getMatchesSortedByPrice("pelouse"));
// console.log(getTotalRevenue(reservations));
// console.log(formatMatchInfo(matchs[0]));
question40();
deleteReserveation();

function question26() {
  const container = document.getElementById("container-matchs");
  matchs.forEach((match) => {
    const div = document.createElement("div");

    div.innerHTML = `<h3> ${match.equipe1} vs ${match.equipe2}</h3> 
                     <p> Date : ${match.date}</p> 
                     <p> Heure : ${match.heure}</p>
                     <p> Stade : ${match.stade}</p>
                     <p> Tribune : ${match.prix.tribune}</p>
                     <p> Virage : ${match.prix.virage}</p> 
                     <p> Pelouse : ${match.prix.pelouse}</p> 
                     <button class="reserver" data-id = "${match.id}"> resever </button>`;

    container.append(div);
  });
}

function question27() {
  document.querySelectorAll(".reserver").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = this.dataset.id;
      document.getElementById("formulaire").scrollIntoView();
      document.getElementById("match").value = id;
    });
  });
}

function quetion28() {
  let total = 0;
  const compteur = document.getElementById("compteur");
  const form = document.getElementById("formulaire");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    total++;
    compteur.textContent = total;
  });
}

function getMatchById(id) {
  return matchs.find((m) => m.id === id);
}

function getMatchesSortedByPrice(categorie) {
  return [...matchs].sort((a, b) => a.prix[categorie] - b.prix[categorie]);
}

function getTotalRevenue(reservationsTest) {
  return reservationsTest.reduce((total, r) => {
    const match = matchs.find((m) => m.id === r.matchId);
    const prixUni = match.prix[r.categorie];
    return total + prixUni * r.nbrTicket;
  }, 0);
}

function formatMatchInfo(match) {
  return `${match.equipe1}  vs  ${match.equipe2} - ${match.date} a ${match.heure} - ${match.stade}`;
}

function question40() {
  const form = document.getElementById("formulaire");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomComplet = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;

    const selectMatch = document.getElementById("match");
    const matchId = Number(selectMatch.value);

    const matchLabel = selectMatch.options[selectMatch.selectedIndex].text;

    const categorie = document.querySelector(
      'input[name="categorie"]:checked',
    ).value;

    const nbrTicket = Number(document.getElementById("ticket").value);

    const matchObj = matchs.find((m) => m.id === matchId);
    const prixUnitaire = matchObj.prix[categorie];
    const prixTotal = prixUnitaire * nbrTicket;

    const reservation = {
      id: Date.now(),
      nomComplet,
      email,
      telephone,
      matchId,
      matchLabel,
      categorie,
      nbrTicket,
      prixUnitaire,
      prixTotal,
      dateReservation: new Date().toLocaleDateString("fr-FR"),
    };

    reservations.push(reservation);
    afficherReservations();
    console.log(reservations);
  });
}

function afficherReservations() {
  const tbody = document.getElementById("body");
  tbody.innerHTML = "";
  reservations.forEach((r) => {
    const tr = document.createElement("tr");
    tr.innerHTML = ` <td>${r.matchLabel}</td>
                      <td>${r.categorie}</td>
                      <td>${r.nbrTicket}</td>
                      <td>${r.prixTotal}</td>
                      <td>${r.dateReservation}</td>
                      <td>
                         <button class="supprimer" data-id = "${r.id}"> supprimer </button>
                      </td> `;

    tbody.append(tr);
  });
}

function deleteReserveation() {
  document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("supprimer")) return;

    const id = Number(e.target.dataset.id);
    reservations = reservations.filter((r) => r.id !== id);
    afficherReservations();
  });
}
