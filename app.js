const form = document.querySelector("form");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const photo = document.querySelector("#photo");
const age = document.querySelector("#age");
const gander = form.gender;
const addBtn = document.querySelector("#add-user");
const wrapper = document.querySelector("#wrapper");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");
const ul = document.querySelector("#users-about");
const h1tex = document.querySelector("#h1-tex");

// const photo = document.querySelector('#photo')
// const photo = document.querySelector('#photo')

function pushAddUser() {
  users.push({
    name: name.value,
    photo: photo.value,
    age: age.value,
    password: password.value,
    gander: gander.value,
  });
}

// function elementCreator(eleent) {
//   document.createElement('li');
// }
console.log(name.value, phone.value, password.value, photo.value);
const users = [];
let counter = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  pushAddUser();
  form.reset();

  const a = document.createElement("li");
  a.textContent = "Salom";
  ul.appendChild(a);
  a.innerHTML = `
  <img class="user-img" src="${users[counter].photo}" alt="Userning logo image">
  <h1>Name: ${users[counter].name}</h1>
  <h1>Age: ${users[counter].age}</h1>
  <h1>Password: ${users[counter].password}</h1>
  <h1>Gander: ${users[counter].gander}</h1>
  `;
  console.log(users[counter].name);
  counter++;
  wrapper.classList.add("hidden");
  overlay.classList.add("hidden");
});

addBtn.addEventListener("click", () => {
  wrapper.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  wrapper.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    wrapper.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
