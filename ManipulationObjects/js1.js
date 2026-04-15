

const data = [
  {
    id: " 001 ",
    name: "  Ali  ",
    email: " ALI@GMAIL.COM ",
    role: " user ",
    active: "true",
    tags: [" JS ", " backend", "  ", "c#"],
    scores: ["10", 20, " 30 ", null],
    address: { city: "  Marrakech ", zip: "40000 ", country: "MA " },
    orders: [
      { id: "o1", total: " 120.50 ", items: ["pen", " notebook ", ""] },
      { id: "o2", total: 80, items: [["mouse", " keyboard "], [" "]] },
    ],
    createdAt: "2026-03-01",
  },
  {
    id: "002",
    name: "sara",
    email: "sara@gmail.com",
    role: "Agent",
    active: true,
    tags: ["frontend", "js", "React", "react"],
    scores: [5, "15", "25"],
    address: { city: "RABAT", zip: "10000", country: "MA" },
    orders: [{ id: "o3", total: "50", items: ["ticket", ""] }],
    createdAt: "2026-03-10",
  },
  {
    id: "003",
    name: "  OMAR",
    email: "omar@gmail.com ",
    role: "admin",
    active: "false",
    tags: [],
    scores: [],
    address: { city: "Casablanca", zip: "20000", country: "MA" },
    orders: [],
    createdAt: "2026-03-15",
  },
  {
    id: " 004 ",
    name: "Khalid",
    email: "khalid@gmail.com",
    role: "user",
    active: 1,
    tags: ["  js", "SQL ", "backend", "sql"],
    scores: ["100", " 90", "80 "],
    address: { city: "Marrakech", zip: "40000", country: "MA" },
    orders: [
      { id: "o4", total: " 200 ", items: [["vip"], ["pass", " pass "]] },
      { id: "o5", total: "0", items: [] },
    ],
    createdAt: "2026-03-20",
  },
  {
    id: "005",
    name: "   ",
    email: "  INVALID_EMAIL ",
    role: "user",
    active: "TRUE",
    tags: ["", "  ", "misc"],
    scores: [null, "x", "20"],
    address: { city: "  ", zip: "", country: "MA" },
    orders: [{ id: "o6", total: " 15.75 ", items: [["gum"], ["water"]] }],
    createdAt: "invalid-date",
  },
];

function normalizeUsers(data){
    
}

