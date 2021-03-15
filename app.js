const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Main function
function tasks() {

    // Adds a list element
    const element = document.createElement("li");
    list.appendChild(element);
    element.innerText = input.value;
    input.value = "";

    // Marks the element as "done" when clicked.
    element.addEventListener("click", function () {
        element.style.textDecoration = "line-through";
    });

    // Removes the element with a double click.
    element.addEventListener("dblclick", function () {
        list.removeChild(element);
    });
}


// Adds a list element when the "+" button is pressed.
button.addEventListener("click", function () {
    tasks()
});


// Adds a list element when the "Enter" key is pressed.
document.addEventListener("keydown", function () {
    const keyEvent = event.key;
    if (keyEvent === "Enter") {
        tasks();
    }
});
