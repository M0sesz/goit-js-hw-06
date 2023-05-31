const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const dataForm = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(dataForm);
  }
});
