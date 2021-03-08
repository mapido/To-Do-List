const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("div");

// Adds a list element when the "+" button is pressed.
button.addEventListener("click", function () {
    let element = document.createElement("li");
    list.appendChild(element);
    element.innerText = input.value;
    input.value = "";

    // Marks the element as done when clicked.
    element.addEventListener("click", function () {
        element.style.textDecoration = "line-through";
    });

    // Removes the element with a double click.
    element.addEventListener("dblclick", function(){
        list.removeChild(element);
    });
});


// Creates a list element when the "Enter" key is pressed.
document.addEventListener("keydown", function (event) {
    const keyName = event.key;
    let enterElement = document.createElement("li");
    if (keyName === "Enter") {
        list.appendChild(enterElement);
        enterElement.innerText = input.value;
        input.value = "";
    };

    // 
    enterElement.addEventListener("click", function () {
        enterElement.style.textDecoration = "line-through";
    });

    // 
    enterElement.addEventListener("dblclick", function(){
        list.removeChild(enterElement);
    });
});