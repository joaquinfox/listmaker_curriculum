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

        reset();
    }
};

const createDomElement = (item) => {
    const newLi = document.createElement("li");
    // Adding a bunch of css to the list item
    newLi.classList.add(
        "list-group-item",
        "text-start",
        "shadow-sm",
        "d-flex",
        "flex-row",
        "justify-content-between",
        "align-items-start"
    );
    const dropdown = createDropdown(item);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("dropdown-item", "text-danger");
    deleteBtn.addEventListener("click", () => {
        handleDelete(item.id);
    });

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("dropdown-item");
    editBtn.addEventListener("click", () => handleEdit(item.id));

    addItemToDropdown(dropdown, editBtn);
    addItemToDropdown(dropdown, deleteBtn);

    newLi.appendChild(document.createTextNode(item.name));
    newLi.appendChild(dropdown);
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
    inputEl.value = data.find((item) => item.id == id).name;
    inputEl.focus();

    formEl.querySelector("button").innerHTML = "Update";

    isEditing = true;
    editID = id;
};

const reset = (key) => {
    formEl.querySelector("button").innerHTML = "Add";
    editID = null;
    isEditing = false;
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

const createDropdown = (listItem) => {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    const extraBtn = document.createElement("button");
    extraBtn.classList.add("btn", "dropdown-toggle", "btn-sm", "dropdownBtn");
    extraBtn.type = "button";
    extraBtn.id = listItem.id + "-dropdown";
    extraBtn.dataset.bsToggle = "dropdown";
    extraBtn.setAttribute("aria-expanded", "false");
    extraBtn.innerHTML = "&#10247;";

    const dropdownItemContainer = document.createElement("ul");
    dropdownItemContainer.classList.add("dropdown-menu");
    dropdownItemContainer.setAttribute(
        "aria-labelledby",
        listItem.id + "-dropdown"
    );

    dropdown.appendChild(extraBtn);
    dropdown.appendChild(dropdownItemContainer);

    return dropdown;
};

const addItemToDropdown = (dropdown, item) => {
    const dropdownItemContainer = dropdown.querySelector("ul");
    const btnContainer = document.createElement("li");
    btnContainer.appendChild(item);
    dropdownItemContainer.appendChild(btnContainer);
};
