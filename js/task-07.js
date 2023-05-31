const controlSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

controlSize.addEventListener("input", () => {
  const fontSize = controlSize.value;
  spanText.style.fontSize = `${fontSize}px`;
});
