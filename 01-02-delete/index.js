// Branch 03: Implement a more complex data structure object with an identifier and delete functionality
const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
const ulEl = document.querySelector("ul");

let data = [];

formEl.onsubmit = (e) => {
  e.preventDefault();
  captureInput(inputEl.value);
  console.log(inputEl.value);
  inputEl.value = "";
};

const captureInput = (input) => {
  let index = new Date().getTime().toString();
  let newItem = { complete: false, id: index, name: input };
  data.push(newItem);
  createDomElement(newItem);
};

const createDomElement = (item) => {
  const newLi = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.addEventListener("click", () => {
    handleDelete(item.id);
  });
  newLi.appendChild(document.createTextNode(item.name));
  newLi.appendChild(deleteBtn);
  addElementToDom(newLi);
};

const addElementToDom = (item) => {
  ulEl.appendChild(item);
};

const handleDelete = (id) => {
  const targetItem = data.find((i) => i.id === id);
  const key = data.indexOf(targetItem).toString();
  console.log("key", typeof key);
  const newData = data.filter((item) => item.id !== id);
  data = newData;
  console.log("from handeDelete", data);
  reset(key);
};

const reset = (key) => {
  console.log(ulEl.childNodes[key]);
  ulEl.removeChild(ulEl.childNodes[Number(key)]);
  console.log("from reset", data);
};
