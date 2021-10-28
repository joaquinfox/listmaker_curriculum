const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const ulElement = document.querySelector("ul");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputElement.value);
  captureUserInput(inputElement.value);
});

const captureUserInput = (item) => {
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(item));
  ulElement.appendChild(newLi);
  inputElement.value = "";
};
