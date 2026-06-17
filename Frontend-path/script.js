console.log("script.js loaded");
const pageTitle = document.title;
console.log("Page title:", pageTitle);
console.log("Module 3 is running!");
const authorName = "Yogo Bekol Alvaro Dimitri";
const role = "Aspiring Developer";
let projectCount = 1;
projectCount += 1;

console.log(`${authorName} — ${role}`);
console.log("Projects:", projectCount);
function buildGreeting(name, role) {
  const article = /^[aeiou]/i.test(role) ? "an" : "a";
  return `Hi, I am ${name} and I am ${article} ${role}.`;
}

console.log(buildGreeting(authorName, role));
function greet(visitorName) {
  if (!visitorName) {
    return "Hello, Guest!";
  }
  return `Hello, ${visitorName}!`;
}

console.log(greet("Instructor"));
console.log(greet());
const double = (n) => n * 2;
const triple = (n) => {
  return n * 3;
};

console.log(double(5));
console.log(triple(5));
const skills = ["web programming", "database", "programming", "Git"];

console.log("Skill count:", skills.length);

for (const skill of skills) {
  console.log("-", skill);
}
const upperSkills = skills.map((s) => s.toUpperCase());
console.log(upperSkills);

const longSkills = skills.filter((s) => s.length > 3);
console.log(longSkills);

const contact = {
  name: authorName,
  email: "yogoalvaro14@gmail.com",
  github: "https://github.com/yogoalvaro-lab",
  available: true,
};

console.log(contact.email);
console.log(contact["https://github.com/yogoalvaro14-lab/Baotechproject"]);

function timeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  }
  return "Good evening";
}

console.log(timeGreeting());
function themeColor(mode) {
  switch (mode) {
    case "dark":
      return "#1e293b";
    case "light":
      return "#f8fafc";
    default:
      return "#ffffff";
  }
}

console.log(themeColor("dark"));
console.log(themeColor("sepia"));
function addTax(price, rate) {
  console.log("price", price, "rate", rate);
  const total = price + price * rate;
  console.log("total", total);
  return total;
}

console.log(addTax(100, 0.08));
console.log("Before timeout");

setTimeout(() => {
  console.log("Inside timeout — async!");
}, 1500);

console.log("After timeout line");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .then((todo) => {
    console.log("Todo:", todo.title);
  })
  .catch((err) => console.error(err));

async function loadUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const user = await response.json();
    console.log("User:", user.name, user.email);
  } catch (error) {
    console.error("Could not load user:", error.message);
  }
}

loadUser();
async function loadUserSafe() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const user = await response.json();
    console.log("Loaded:", user.username);
  } catch (error) {
    console.error("Could not load user:", error.message);
  }
}

loadUserSafe();
const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
async function showPostTitle() {
  const main = document.querySelector("main");
  if (!main) return;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const post = await res.json();

    const note = document.createElement("p");
    note.className = "api-note";
    note.textContent = `Latest post: ${post.title}`;
    main.append(note);
  } catch (error) {
    console.error("Could not load post:", error.message);
  }
}

showPostTitle();