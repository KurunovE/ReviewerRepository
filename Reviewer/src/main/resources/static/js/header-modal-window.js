const geolocationModalWindow = document.querySelector(".geolocation-modal-window");
const loginModalWindow = document.querySelector(".login-modal-window");
const modalBackground = document.querySelector(".modal-background");
const loginMenu = document.querySelector(".login-modal-window__main-content");
const registerButton = document.querySelector(".login-modal-window__register-button");
const loginButton = document.querySelector(".login-modal-window__login-button");

document.addEventListener('DOMContentLoaded',() => {

    document.querySelector(".header__geolocation-block").addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        geolocationModalWindow.classList.toggle("modal-window-inactive");
    })
    document.querySelector(".geolocation-modal-window .close-button").addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        geolocationModalWindow.classList.toggle("modal-window-inactive");
    });
    document.querySelector(".header__button").addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        loginModalWindow.classList.toggle("modal-window-inactive");
    });
    document.querySelector(".login-modal-window .close-button").addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        loginModalWindow.classList.toggle("modal-window-inactive");
    });
    document.querySelector(".login-modal-window__login-button").addEventListener("click", () => {
        registerButton.classList.remove("login-button-active");
        loginMenu.classList.remove("register-input-active");
        loginButton.classList.add("login-button-active");
        loginMenu.classList.add("login-input-active");
    });
    document.querySelector(".login-modal-window__register-button").addEventListener("click", () => {
        loginButton.classList.remove("login-button-active");
        loginMenu.classList.remove("login-input-active");
        registerButton.classList.add("login-button-active");
        loginMenu.classList.add("register-input-active");
    });
});