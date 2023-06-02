const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listUl = document.querySelector("ul#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredients) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients;
  listItem.classList.add("item");
  listUl.appendChild(listItem);
});

listUl.appendChild(fragment);
