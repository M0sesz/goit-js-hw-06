const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let counter = 0;

decrementButton.addEventListener("click", () => {
  counter -= 1;
  counterValue.textContent = counter;
});

incrementButton.addEventListener("click", () => {
  counter += 1;
  counterValue.textContent = counter;
});
