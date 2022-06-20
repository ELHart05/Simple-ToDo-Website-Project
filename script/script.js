const input = document.querySelector(".submit-input"),
    submit_btn = document.querySelector(".submit-btn"),
    container = document.querySelector(".container");


submit_btn.addEventListener("click", function () {

    if (input.value) {
        let mainDiv = document.createElement("div"),
            checkedDiv = Object.assign(document.createElement("div"), {
                classList: "checked"
            }),
            addedInput = Object.assign(document.createElement("input"), {
                type: "text",
                value: input.value,
                readOnly: "true",
                classList: "adittion-input"
            }),
            editBtn = Object.assign(document.createElement("button"), {
                classList: "edit",
                textContent: "EDIT"
            }),
            deleteBtn = Object.assign(document.createElement("button"), {
                classList: "delete",
                textContent: "DELETE"
            });

        mainDiv.append(checkedDiv, addedInput, editBtn, deleteBtn);
        container.appendChild(mainDiv);

        deleteBtn.addEventListener("click", function () {
            mainDiv.remove();
        })

        checkedDiv.addEventListener("click", function () {
            checkedDiv.classList.toggle("checked-style");
            addedInput.classList.toggle("crossed-input");
            deleteBtn.classList.toggle("dark-btn");
            editBtn.classList.toggle("dark-btn");
        })

        editBtn.addEventListener("click", function () {
            if (editBtn.textContent == "EDIT") {
                addedInput.readOnly = false;
                addedInput.focus();
                editBtn.textContent = "SAVE";
            } else {
                addedInput.readOnly = true;
                editBtn.textContent = "EDIT";
            }
        })

        input.value = '';
    }
})