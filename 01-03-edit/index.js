// Module 03: Edit functionality
const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
const ulEl = document.querySelector("ul");

let data = [];

formEl.onsubmit = (e) => {
  e.preventDefault();
  captureInput(inputEl.value);
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
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "edit";
  deleteBtn.addEventListener("click", () => {
    handleDelete(item.id);
  });
  newLi.appendChild(document.createTextNode(item.name));
  newLi.appendChild(deleteBtn);
  newLi.appendChild(editBtn);
  addElementToDom(newLi);
};

const addElementToDom = (item) => {
  ulEl.appendChild(item);
};

const handleDelete = (id) => {
  const targetItem = data.find((i) => i.id === id);
  const key = data.indexOf(targetItem).toString();
  const newData = data.filter((item) => item.id !== id);
  data = newData;
  reset(key);
};

const handleEdit = (id) => {
  console.log('edit button clicked');
};

const reset = (key) => {
  ulEl.removeChild(ulEl.childNodes[Number(key)]);
};
