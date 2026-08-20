import data from "./userobjects";

// Challenge - Stage 1
let addUser = function (user) {
  // If there's no user to do, do nothing
  if (!user || user.length < 1) return; // Get the list
  let list = document.querySelector("#app"); // Create a new list item
  let listItem = document.createElement("div");
  listItem.textContent = user.firstName; // Append the item to the list
  list.appendChild(listItem);
};
let user = {
  firstName: "Deepak",
  lastName: "Huxley",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@aldus",
    linkedIn: "linkedin.com/in/ahuxley",
  },
  isEmployed: true,
  changeAge: function () {
    return (this.age += 1);
  },
  changeArrowAge: () => {
    this.age += 1;
  },
};
addUser(user);
