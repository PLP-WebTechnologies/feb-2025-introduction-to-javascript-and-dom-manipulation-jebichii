// script.js

function changeText() {
    const textElement = document.getElementById("dynamic-text");
    textElement.textContent = "The text has been changed dynamically!";
}

function changeStyle() {
    const styleElement = document.getElementById("style-text");
    styleElement.classList.toggle("highlight");
}

function addElement() {
    const container = document.getElementById("element-container");
    const newElement = document.createElement("p");
    newElement.textContent = "A new element has been added!";
    newElement.setAttribute("id", "added-element");
    container.appendChild(newElement);
}

function removeElement() {
    const element = document.getElementById("added-element");
    if (element) {
        element.remove();
    }
}