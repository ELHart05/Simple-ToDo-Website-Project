const input = document.querySelector(".submit-input"),
    submit_btn = document.querySelector(".submit-btn"),
    container = document.querySelector(".container");


function insertNewElement() {

    if (input.value) {
        let mainDiv = document.createElement("div"),
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

        mainDiv.append(addedInput, editBtn, deleteBtn);
        container.appendChild(mainDiv);

        deleteBtn.addEventListener("click", function () {
            mainDiv.remove();
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
}

submit_btn.addEventListener("click", insertNewElement);
window.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        insertNewElement();
    }
})
