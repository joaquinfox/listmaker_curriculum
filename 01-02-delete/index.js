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
    // Creating a list item
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

    const deleteBtn = document.createElement("button");
    const dropdown = createDropdown(item);
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("dropdown-item", "text-danger");
    deleteBtn.addEventListener("click", () => {
        handleDelete(item.id);
    });

    addItemToDropdown(dropdown, deleteBtn);

    newLi.appendChild(document.createTextNode(item.name));
    newLi.appendChild(dropdown);

    addElementToDom(newLi);
};

const addElementToDom = (item) => {
    ulEl.appendChild(item);
};

const handleDelete = (id) => {
    // Locate the item to be deleted
    const targetItem = data.find((i) => i.id === id);

    // Create a unique key for that item equevalent to the items position in the data array
    const key = data.indexOf(targetItem).toString();

    // Filter the array to exclude the item, using ID
    const newData = data.filter((item) => item.id !== id);

    // Store the new state
    data = newData;
    // console.log("from handeDelete", data);

    // At this point the DOM and state are not synchronized. rest() updates the DOM
    reset(key);
};

const reset = (key) => {
    ulEl.removeChild(ulEl.childNodes[Number(key)]);
    // console.log("from reset", data);
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
