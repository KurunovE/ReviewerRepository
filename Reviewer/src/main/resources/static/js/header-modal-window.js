const geolocationModalWindow = document.querySelector(".geolocation-modal-window");
const loginModalWindow = document.querySelector(".login-modal-window");
const modalBackground = document.querySelector(".modal-background");
const loginMenu = document.querySelector(".login-modal-window__main-content");
const registerButton = document.querySelector(".login-modal-window__register-button");
const loginButton = document.querySelector(".login-modal-window__login-button");
const citiesListBlock = document.querySelector(".select-list ul");
const geolocationSelectedCity = document.querySelector(".search-input");
const geolocationHeaderBlock = document.querySelector(".header__geolocation-block div");
const cities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород",
    "Челябинск",
    "Красноярск",
    "Самара",
    "Уфа",
    "Ростов-на-Дону",
    "Омск",
    "Краснодар",
    "Воронеж",
    "Пермь",
    "Волгоград",
    "Владивосток",
    "Саратов",
    "Тюмень",
    "Тольятти",
    "Барнаул",
    "Ижевск",
    "Ульяновск",
    "Иркутск",
    "Хабаровск",
    "Ярославль",
    "Махачкала",
    "Оренбург",
    "Томск",
    "Кемерово"
];
cities.forEach((item)=>{
    let list = document.createElement("li");
    list.classList.add("geolocation-list-item");
    citiesListBlock.appendChild(list);
    list.addEventListener("click",()=>{
        geolocationSelectedCity.value = list.textContent;
    })
})
document.addEventListener('DOMContentLoaded',() => {

    document.querySelector(".header__geolocation-block").addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        geolocationModalWindow.classList.toggle("modal-window-inactive");
    })
    document.querySelector(".geolocation-modal-window .close-button").addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        geolocationModalWindow.classList.toggle("modal-window-inactive");
        geolocationHeaderBlock.textContent = geolocationSelectedCity.value;
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