// Module 03: Edit functionality
const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
const ulEl = document.querySelector("ul");
let isEditing = false;
let editID = null;

inputEl.focus();
let data = [];

formEl.onsubmit = (e) => {
  e.preventDefault();
  captureInput(inputEl.value);
  inputEl.value = "";
};

const captureInput = (input) => {
  if (!isEditing) {
    let index = new Date().getTime().toString();
    let newItem = { complete: false, id: index, name: input };
    data.push(newItem);
    createDomElement(newItem);
  } else {
    const target = data.find((item) => item.id === editID);
    target.name = inputEl.value;
    editID = null;
    isEditing = false;
    reset();
  }
};

const createDomElement = (item) => {
  const newSpan = document.createElement("span");
  const newLi = document.createElement("li");
  if (item.complete) {
    newLi.classList.add("complete");
  } else {
    newLi.classList.remove("complete");
  }
  console.log(newLi);
  // Delete
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.addEventListener("click", () => {
    handleDelete(item.id);
  });

  // Edit
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "edit";
  editBtn.addEventListener("click", () => handleEdit(item.id));

  // Strikethrough
  const strikeBtn = document.createElement("button");
  strikeBtn.innerHTML = "strikethrough";
  strikeBtn.addEventListener("click", () => {
    handleStrike(item.id);
  });

  newLi.appendChild(document.createTextNode(item.name));
  newSpan.appendChild(deleteBtn);
  newSpan.appendChild(editBtn);
  newSpan.appendChild(strikeBtn);
  newLi.appendChild(newSpan);
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
  inputEl.placeholder = "...update your list.";
  inputEl.focus();

  isEditing = true;
  editID = id;
};

const handleStrike = (id) => {
  // conrst targetItem = data.find((i) => i.id === id);
  return data.map((i) => {
    if (i.id === id) {
      return (i.complete = true);
      console.log("flag 1", i.complete);
    }
  });
};

const reset = (key) => {
  while (ulEl.firstChild) {
    ulEl.removeChild(ulEl.firstChild);
  }
  rebuild();
};

const rebuild = () => {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      createDomElement(data[i]);
    }
  }
};
