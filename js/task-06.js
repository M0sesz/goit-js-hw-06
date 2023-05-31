const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const enteredValue = validationInput.value;
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));

  if (enteredValue.length === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
