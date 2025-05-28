const geolocationModalWindow = document.querySelector(".geolocation-modal-window");
const loginModalWindow = document.querySelector(".login-modal-window");
const modalBackground = document.querySelector(".modal-background");
const loginMenu = document.querySelector(".login-modal-window__main-content");
const registerButton = document.querySelector(".login-modal-window__register-button");
const loginButton = document.querySelector(".login-modal-window__login-button");
const citiesListBlock = document.querySelector(".select-list ul");
const geolocationSelectedCity = document.querySelector(".geolocation-modal-window__input");
const geolocationHeaderBlock = document.querySelector(".header__geolocation-block div");
const loginEmail = document.querySelector(".login-email");
const loginPassword = document.querySelector(".login-password");
const registerUsername = document.querySelector(".register-username");
const registerEmail = document.querySelector(".register-email");
const registerPassword = document.querySelector(".register-password");
const registerConfirmPassword = document.querySelector(".register-confirm-password");
const registerAlertMessage = document.querySelector(".login-modal-window__register-alert-message");
const registerInputs = [registerUsername,registerEmail,registerPassword,registerConfirmPassword]
const passwordInputs = [registerPassword,registerConfirmPassword];
const loginInputs = [loginEmail,loginPassword];
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
    list.textContent = item;
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
        registerInputs.forEach(item =>{
           item.value = "";
        });
        loginInputs.forEach(item =>{
            item.value = "";
        })
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
    document.querySelector(".login-modal-window__confirm-button").addEventListener("click", ()=>{
        let registerWindow = document.querySelector(".register-input-active");
        let loginWindow = document.querySelector(".login-input-active");
        if (registerWindow){
            let flag = true;
            registerInputs.forEach(item => {
                item.addEventListener("blur",()=>{
                    if (item.value) item.classList.remove("register-input-inactive");
                    else item.classList.add("register-input-inactive");
                })
                if (!item.value){
                    flag = false;
                    item.classList.add("register-input-inactive");
                }
            })
            if (flag){
                let username = registerUsername.value
                let email = registerEmail.value;
                let password = registerPassword.value;
                let confirmPassword = registerConfirmPassword.value;
                if (!(email.includes("@"))){
                    registerAlertMessage.classList.remove("register-alert-message-inactive");
                    registerAlertMessage.textContent = "Неверный формат email";
                    registerEmail.classList.add("register-input-inactive");
                    registerEmail.addEventListener("focus",()=>{
                        registerEmail.classList.remove("register-input-inactive");
                    })
                }
                else if (password === confirmPassword){
                    registerAlertMessage.classList.add("register-alert-message-inactive");

                }
                else{
                    registerAlertMessage.textContent = "Пароли не совпадают";
                    registerAlertMessage.classList.remove("register-alert-message-inactive");
                    passwordInputs.forEach(item => {
                        item.classList.add("register-input-inactive");
                        item.addEventListener("focus",()=>{
                            item.classList.remove("register-input-inactive");
                        })
                    })

                }
            }

        }
        else if (loginWindow){
            let flag = true;
            loginInputs.forEach(item => {
                item.addEventListener("blur",()=>{
                    if (item.value) item.classList.remove("register-input-inactive");
                    else item.classList.add("register-input-inactive");
                })
                if (!item.value){
                    flag = false;
                    item.classList.add("register-input-inactive");
                }
            })
            if (flag){
                let email = loginEmail.value;
                let password = loginPassword.value
            }


        }
    });
});