const geolocationModalWindow = document.querySelector(".geolocation-modal-window");
const loginModalWindow = document.querySelector(".login-modal-window");
const modalBackground = document.querySelector(".modal-background");
const loginMenu = document.querySelector(".login-modal-window__main-content");
const registerButton = document.querySelector(".login-modal-window__register-button");
const loginButton = document.querySelector(".login-modal-window__login-button");
const bigSliderLine = document.querySelector(".main__big-swiper-wrapper");
const normalSliderLine = document.querySelector(".main__normal-swiper-wrapper");
const secondNormalSliderLine = document.querySelector(" .main__second-normal-swiper-wrapper");
const thirdNormalSliderLine = document.querySelector(".main__third-normal-swiper-wrapper");
const mainCollection = document.querySelector(".main__collection-redirect-block-container");
const images = ['11.jpg','22.jpg','33.jpg','44.jpg','55.jpg','66.jpg'];
for (let i = 0; i < 6; i++ ){
    let imgCount = i;
    ( imgCount === 6) ? imgCount = 0 : imgCount;
    let redirect = document.createElement("a");
    redirect.href = "https://www.google.com";
    redirect.classList.add("main__collection-redirect-block");
    let img = document.createElement("img");
    img.src = `/slide/${images[imgCount]}`;
    mainCollection.appendChild(redirect);
    redirect.appendChild(img);
}
for (let image of images) {
    let imgRedirect = document.createElement("a");
    imgRedirect.href = "https://www.google.com";
    let img = document.createElement("img");
    img.src = `/slide/${image}`;
    img.classList.add("image-slide");
    imgRedirect.classList.add("swiper-slide");
    bigSliderLine.appendChild(imgRedirect);
    imgRedirect.appendChild(img);
}
for (let image of images) {
    let imgRedirect = document.createElement("a");
    imgRedirect.href = "https://www.google.com";
    let img = document.createElement("img");
    img.src = `/slide/${image}`;
    imgRedirect.classList.add("swiper-slide");
    img.classList.add("main__normal-slide-img");
    normalSliderLine.appendChild(imgRedirect);
    imgRedirect.appendChild(img);

}
for (let image of images) {
    let imgRedirect = document.createElement("a");
    imgRedirect.href = "https://www.google.com";
    let img = document.createElement("img");
    img.src = `/slide/${image}`;
    imgRedirect.classList.add("swiper-slide");
    img.classList.add("main__normal-slide-img");
    secondNormalSliderLine.appendChild(imgRedirect);
    imgRedirect.appendChild(img);

}
for (let image of images) {
    let imgRedirect = document.createElement("a");
    imgRedirect.href = "https://www.google.com";
    let img = document.createElement("img");
    img.src = `/slide/${image}`;
    imgRedirect.classList.add("swiper-slide");
    img.classList.add("main__normal-slide-img");
    thirdNormalSliderLine.appendChild(imgRedirect);
    imgRedirect.appendChild(img);

}
const swiper = new Swiper('.main__big-swiper', {
    loop: true,
    slidesPerView: 1.4,
    pagination: {
        el: '.main__big-swiper-pagination',
    },
    navigation: {
        nextEl: '.main__swiper-next-button',
        prevEl: '.main__swiper-prev-button',
    },
});
const firstNormalSwiper = new Swiper('.main__first-normal-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.main__normal-swiper-next-button',
        prevEl: '.main__normal-swiper-prev-button',
    }
})
const secondNormalSwiper = new Swiper('.main__second-normal-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.main__second-normal-swiper-next-button',
        prevEl: '.main__second-normal-swiper-prev-button',
    }
})
const thirdNormalSwiper = new Swiper('.main__third-normal-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.main__third-normal-swiper-next-button',
        prevEl: '.main__third-normal-swiper-prev-button',
    }
})
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
