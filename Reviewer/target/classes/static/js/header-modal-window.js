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
const loginAlertMessage = document.querySelector(".login-modal-window__login-alert-message");
const registerAlertMessage = document.querySelector(".login-modal-window__register-alert-message");
const headerButton = document.querySelector(".header__button");
const userBlock = document.querySelector(".header__userBlock");
const registerInputs = [registerUsername,registerEmail,registerPassword,registerConfirmPassword]
const passwordInputs = [registerPassword,registerConfirmPassword];
const loginInputs = [loginEmail,loginPassword];
const localStorageUsername = localStorage.getItem("username");
const localStorageId = localStorage.getItem("id");
const locationLocalStorage = localStorage.getItem("location");
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
function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._\-]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function closeLoginWindow(){
    modalBackground.classList.toggle("modal-background-inactive");
    loginModalWindow.classList.toggle("modal-window-inactive");
    registerInputs.forEach(item =>{
        item.value = "";
    });
    loginInputs.forEach(item =>{
        item.value = "";
    })
}
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
    if (localStorageUsername && localStorageId){
        userBlock.innerHTML = `
            <div class="header__userProfile">
                <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4688 5.15625C15.4688 8.00397 13.1602 10.3125 10.3125 10.3125C7.46478 10.3125 5.15625 8.00397 5.15625 5.15625C5.15625 2.30853 7.46478 0 10.3125 0C13.1602 0 15.4688 2.30853 15.4688 5.15625Z" fill="white"/>
                    <path d="M16.4232 12.375H4.20181C3.47697 12.375 2.76598 12.5735 2.14601 12.9491L1.80186 13.1576C1.30128 13.4608 0.910811 13.9162 0.687537 14.4572C0.270192 15.4684 0.492109 16.6324 1.28166 17.3896C2.11735 18.1911 3.21727 19.1992 4.125 19.8712C5.66181 21.009 6.49183 21.8966 8.25 22.37C9.82255 22.7933 10.8024 22.7933 12.375 22.37C14.1332 21.8966 14.9632 21.009 16.5 19.8712C17.4077 19.1992 18.5077 18.1911 19.3433 17.3896C20.1329 16.6324 20.3548 15.4684 19.9375 14.4572C19.7142 13.9162 19.3237 13.4608 18.8231 13.1576L18.479 12.9491C17.859 12.5735 17.148 12.375 16.4232 12.375Z" fill="white"/>
                </svg>
                <div class="header__username">${localStorageUsername}</div>
            </div> 
            <div class="header__profileWindow">
            <a href = "/profile?id=${localStorageId}">Настройки</a>
            <a href = "/profile?id=${localStorageId}">Профиль</a>
            <div class="removeLocalStorage">Выйти</div>
            </div>
                                `;
        if (locationLocalStorage){
            geolocationHeaderBlock.textContent = locationLocalStorage;
            geolocationSelectedCity.value = geolocationHeaderBlock.textContent;
        }
    }
    const removeLocalStorage = document.querySelector(".removeLocalStorage");
    if (removeLocalStorage){
        removeLocalStorage.addEventListener("click",function (){
            localStorage.removeItem("username");
            localStorage.removeItem("id");
            localStorage.removeItem("location");
            location.reload();
        })
    };
    document.querySelector(".header__geolocation-block").addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        geolocationModalWindow.classList.toggle("modal-window-inactive");
    })
    document.querySelector(".geolocation-modal-window .close-button").addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        geolocationModalWindow.classList.toggle("modal-window-inactive");
        geolocationHeaderBlock.textContent = geolocationSelectedCity.value;
        if (localStorageUsername && localStorageId){
            localStorage.setItem("location",geolocationSelectedCity.value);
        }
    });
    headerButton.addEventListener("click", () => {
        modalBackground.classList.toggle("modal-background-inactive");
        loginModalWindow.classList.toggle("modal-window-inactive");
    });
    document.querySelector(".login-modal-window .close-button").addEventListener("click", () => {
        closeLoginWindow();
    });
    document.querySelector(".login-modal-window__login-button").addEventListener("click", () => {
        registerButton.classList.remove("login-button-active");
        loginMenu.classList.remove("register-input-active");
        loginButton.classList.add("login-button-active");
        loginMenu.classList.add("login-input-active");
        setTimeout(()=>{registerInputs.forEach(item =>{
            item.classList.remove("register-input-inactive");
        });
            registerAlertMessage.classList.add("register-alert-message-inactive");
        },500);

    });
    document.querySelector(".login-modal-window__register-button").addEventListener("click", () => {
        loginButton.classList.remove("login-button-active");
        loginMenu.classList.remove("login-input-active");
        registerButton.classList.add("login-button-active");
        loginMenu.classList.add("register-input-active");
        setTimeout(()=>{registerInputs.forEach(item =>{
            item.classList.remove("register-input-inactive");
        });

        },500);

    });
    document.querySelector(".login-modal-window__confirm-button").addEventListener("click", function(){


        let registerWindow = document.querySelector(".register-input-active");
        let loginWindow = document.querySelector(".login-input-active");
        if (registerWindow){
            let flag = true;
            registerInputs.forEach(item => {
                if (!item.value){
                    item.addEventListener("blur",()=>{
                        item.classList.remove("register-input-inactive");
                    })
                    flag = false;
                    item.classList.add("register-input-inactive");
                }
            })
            if (flag){
                let username = registerUsername.value
                let email = registerEmail.value;
                let password = registerPassword.value;
                let confirmPassword = registerConfirmPassword.value;
                if (username.length >20){
                    registerAlertMessage.style.color = "red";
                    registerAlertMessage.classList.remove("register-alert-message-inactive");
                    registerAlertMessage.textContent = "Слишком длинное имя пользователя!";
                    registerUsername.classList.add("register-input-inactive");
                    registerUsername.addEventListener("focus",()=>{
                        registerUsername.classList.remove("register-input-inactive");
                    })
                }
                else if (!(email.includes("@") && isValidEmail(email) && email.length<50)){
                    registerAlertMessage.style.color = "red";
                    registerAlertMessage.classList.remove("register-alert-message-inactive");
                    registerAlertMessage.textContent = "Неверный формат email";
                    registerEmail.classList.add("register-input-inactive");
                    registerEmail.addEventListener("focus",()=>{
                        registerEmail.classList.remove("register-input-inactive");
                    })
                }
                else if (password === confirmPassword){
                    this.classList.add("disabled");
                    registerAlertMessage.classList.add("register-alert-message-inactive");
                    let userObject = {
                        username: username,
                        email: email,
                        password: password,
                        birthday: "1973-12-31"
                    }
                    let promise = fetch("http://localhost:8081/api/v1/user/save_user",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(userObject)
                    })
                        .then(item => {
                            loginInputs.forEach(item => {
                                item.value = "";
                            })
                            registerInputs.forEach(item =>{
                                item.value = "";
                            });
                            this.classList.remove("disabled");
                            registerAlertMessage.textContent = "Вы успешно зарегистрировались!"
                            registerAlertMessage.style.color = "green";
                            registerAlertMessage.classList.remove("register-alert-message-inactive");
                        })

                }
                else{
                    registerAlertMessage.style.color = "red";
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
                this.classList.add("disabled");
                let email = loginEmail.value;
                let password = loginPassword.value
                let promise = fetch(`http://localhost:8081/api/v1/user?email=${email}`)
                    .then(item => {
                        let json = item.json()
                            .then(item => {
                                if (item.password === password) {
                                    loginInputs.forEach(item=>{
                                        item.value = "";
                                    })
                                    localStorage.setItem("username",item.username);
                                    localStorage.setItem("id",item.id);
                                    closeLoginWindow();
                                    userBlock.innerHTML = `
                                    <div class="header__userProfile">
                                        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.4688 5.15625C15.4688 8.00397 13.1602 10.3125 10.3125 10.3125C7.46478 10.3125 5.15625 8.00397 5.15625 5.15625C5.15625 2.30853 7.46478 0 10.3125 0C13.1602 0 15.4688 2.30853 15.4688 5.15625Z" fill="white"/>
                                            <path d="M16.4232 12.375H4.20181C3.47697 12.375 2.76598 12.5735 2.14601 12.9491L1.80186 13.1576C1.30128 13.4608 0.910811 13.9162 0.687537 14.4572C0.270192 15.4684 0.492109 16.6324 1.28166 17.3896C2.11735 18.1911 3.21727 19.1992 4.125 19.8712C5.66181 21.009 6.49183 21.8966 8.25 22.37C9.82255 22.7933 10.8024 22.7933 12.375 22.37C14.1332 21.8966 14.9632 21.009 16.5 19.8712C17.4077 19.1992 18.5077 18.1911 19.3433 17.3896C20.1329 16.6324 20.3548 15.4684 19.9375 14.4572C19.7142 13.9162 19.3237 13.4608 18.8231 13.1576L18.479 12.9491C17.859 12.5735 17.148 12.375 16.4232 12.375Z" fill="white"/>
                                        </svg>  
                                        <div class="header__username">${item.username}</div>
                                    </div> 
                                    <div class="header__profileWindow">
                                    <a href = "/profile?id=${item.id}">Настройки</a>
                                    <a href = "/profile?id=${item.id}">Профиль</a>
                                    <div class="removeLocalStorage">Выйти</div>
                                    </div>
                                                        `;
                                    location.reload();
                                    const removeLocalStorage = document.querySelector(".removeLocalStorage");
                                    if (removeLocalStorage) {
                                        removeLocalStorage.addEventListener("click", function () {
                                            localStorage.removeItem("username");
                                            localStorage.removeItem("id");
                                            localStorage.removeItem("location");
                                            location.reload();
                                        })
                                    };
                                }
                                else {
                                    this.classList.remove("disabled");
                                    loginInputs.forEach(item=>{
                                        item.value = ""
                                        item.classList.add("register-input-inactive");
                                        item.addEventListener("focus",()=>{
                                            item.classList.remove("register-input-inactive");
                                        })
                                    })
                                    loginAlertMessage.classList.remove("login-alert-message-inactive");

                                }
                            })
                            .catch(item => {
                                console.error("Error getUser!")
                                this.classList.remove("disabled");
                                loginInputs.forEach(item=>{
                                    item.value = ""
                                    item.classList.add("register-input-inactive");
                                    item.addEventListener("focus",()=>{
                                        item.classList.remove("register-input-inactive");
                                    })
                                })
                                loginAlertMessage.classList.remove("login-alert-message-inactive");
                            })
                    })
            }


        }
    });
});