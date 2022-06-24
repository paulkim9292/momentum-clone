'use strict'

const loginScreen = document.querySelector(".intro")
const loginForm = document.querySelector("#input-wrapper");
const loginInput = document.querySelector("#name-input")
const loginQuestion = document.querySelector("#question")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginScreen.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        loginScreen.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
    });
} else {
    paintGreetings(savedUsername);
}