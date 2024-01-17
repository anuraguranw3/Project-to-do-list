const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", function () {
    createNote();
});


const createNote = () => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("note-input");

    const inputValue = document.createElement("input");
    inputValue.setAttribute("id", "task");
    taskDiv.appendChild(inputValue);

    const cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("id", "cancel");
    cancelBtn.innerText = "Cancel";
    taskDiv.appendChild(cancelBtn);

    const createBtn = document.createElement("button");
    createBtn.setAttribute("id", "create");
    createBtn.innerText = "Create";
    taskDiv.appendChild(createBtn);

    document.body.append(taskDiv);

    cancelBtn.addEventListener("click", function () {
        cancelBtnAction();
    });
    createBtn.addEventListener("click", function () {
        createBtnAction();
    });
};

const cancelBtnAction = () => {
    const noteForm = document.querySelector(".note-input");
    if (noteForm) {
        document.body.removeChild(noteForm);
    }
};

const createBtnAction = () => {
    // alert("hi");
    const list = document.querySelector("#list");
    const li = document.createElement("li");
    const text = document.querySelector("#task");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    removeBtn.type = "button";
    removeBtn.classList.add("remove");


    if (text.value === "") {
        alert("Add text");
    }
    else {
        const h3 = document.createElement("h3");
        h3.innerText = text.value;

        li.appendChild(removeBtn);
        li.appendChild(h3);
        list.prepend(li);

        cancelBtnAction();
    }
    removeBtn.addEventListener("click", function () {
        if (li) {
            list.removeChild(li);
        }
    })
};