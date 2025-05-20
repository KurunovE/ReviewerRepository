const bigSliderLine = document.querySelector(".main__big-swiper-wrapper");
const normalSliderLine = document.querySelector(".main__normal-swiper-wrapper");
const secondNormalSliderLine = document.querySelector(" .main__second-normal-swiper-wrapper");
const thirdNormalSliderLine = document.querySelector(".main__third-normal-swiper-wrapper");
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
const filmObjects = [
    {
        img: "/FilmImg/1+1-3-long.png",
        href: "/1+1",
        title: "1+1"
    },
    {
        img: "/FilmImg/Interstellar3-long.png",
        href: "/Интерстеллар",
        title: "Интерстеллар"
    },
    {
        img: "/FilmImg/Taxi3-long.png",
        href: "/Такси",
        title: "Такси"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/15a79875-4799-46fd-b51b-d3a9b42cdfe3/3840x",
        href: "/Побег из Шоушенка",
        title: "Побег из Шоушенка"
    },
    {
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/77f89752-342a-4973-a3e3-3b2daecb074d/3840x",
      href: "/Крестный отец",
      title: "Крестный отец"
    },
    {
        img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/989a9e02-3dd6-4c9a-ac1f-39b44f05a227/3840x",
        href: "/Темный рыцарь",
        title: "Темный рыцарь"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/0a919184-43b0-426f-ad89-08857eb27b00/3840x",
        href: "/Список Шиндлера",
        title: "Список Шиндлера"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9c918339-f643-4663-a716-4655c121a674/3840x",
        href: "/Форрест Гамп",
        title: "Форрест Гамп"
    },
    {
        img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/5bc86e3a-652f-4a8f-8b4b-aeebed05e1c2/3840x",
        href: "/Начало",
        title: "Начало"
    },
    {
        img: "https://api.kinoart.ru/storage/post/928/regular_detail_picture-cfbef417cfdd8f654f3628267381a491.jpg",
        href: "/Бойцовский клуб",
        title: "Бойцовский клуб"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/0055b5cc-cee8-4a45-bce3-d9890df38882/3840x",
        href: "/Звездные войны: Эпизод V - Империя наносит ответный удар",
        title: "Звездные войны: Эпизод V - Империя наносит ответный удар"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d69ebb58-f07d-498f-8f04-71a0ed636a87/3840x",
        href: "/Матрица",
        title: "Матрица"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/86f2f7f2-16ce-4dca-8fdb-4ca21f8720e8/3840x",
        href: "/Молчание ягнят",
        title: "Молчание ягнят"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1d071245-34b2-4712-b3f9-57022ada4ec2/3840x",
        href: "/Один дома",
        title: "Один дома"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/70901cde-8233-42b2-b60a-3c0cdb4bcee8/3840x",
        href: "/Назад в будущее",
        title: "Назад в будущее"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/5ae974be-6e73-4ec8-b29f-249426dce2b0/3840x",
        href: "/Титаник",
        title: "Титаник"
    },
    {
        img:"https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/2817a3b5-7c65-4094-a78f-48994f7f3be8/3840x",
        href: "/Терминатор 2: Судный день",
        title: "Терминатор 2: Судный день"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/4f6c3b73-db7c-44b7-88a9-246264416ae3/3840x",
        href: "/Король Лев",
        title: "Король Лев"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d7433bc0-a620-41a0-9f70-0b144206f3d0/3840x",
        href: "/ВАЛЛ-И",
        title: "ВАЛЛ-И"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/c6f19e6f-79dc-43de-80cc-11d8b31fac34/3840x",
        href: "/Зеленая миля",
        title: "Зеленая миля"
    }
];
let comedyFilms = shuffle([
    {
        img: "/FilmImg/1+1-3-long.png",
        href: "/1+1",
        title: "1+1"
    },
    {
        img: "/FilmImg/Taxi3-long.png",
        href: "/Такси",
        title: "Такси"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/70901cde-8233-42b2-b60a-3c0cdb4bcee8/3840x",
        href: "/Назад в будущее",
        title: "Назад в будущее"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1d071245-34b2-4712-b3f9-57022ada4ec2/3840x",
        href: "/Один дома",
        title: "Один дома"
    },
]);
let fantasyFilms = shuffle([
    {
        img: "/FilmImg/Interstellar3-long.png",
        href: "/Интерстеллар",
        title: "Интерстеллар"
    },
    {
        img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/5bc86e3a-652f-4a8f-8b4b-aeebed05e1c2/3840x",
        href: "/Начало",
        title: "Начало"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/0055b5cc-cee8-4a45-bce3-d9890df38882/3840x",
        href: "/Звездные войны: Эпизод V - Империя наносит ответный удар",
        title: "Звездные войны: Эпизод V - Империя наносит ответный удар"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d69ebb58-f07d-498f-8f04-71a0ed636a87/3840x",
        href: "/Матрица",
        title: "Матрица"
    },
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/70901cde-8233-42b2-b60a-3c0cdb4bcee8/3840x",
        href: "/Назад в будущее",
        title: "Назад в будущее"
    },
    {
        img:"https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/2817a3b5-7c65-4094-a78f-48994f7f3be8/3840x",
        href: "/Терминатор 2: Судный день",
        title: "Терминатор 2: Судный день"
    }
]);
let headerSlider = shuffle(filmObjects).slice(0,7);
headerSlider.forEach( (item) => {
    let redirect = document.createElement("a");
    redirect.href = "/films" + item.href;
    redirect.classList.add("main__collection-redirect-block");
    let img = document.createElement("img");
    img.src = item.img;
    img.classList.add("image-slide");
    redirect.classList.add("swiper-slide");
    bigSliderLine.appendChild(redirect);
    redirect.appendChild(img);
});
headerSlider = shuffle(headerSlider).slice(0,6);
headerSlider.forEach((item) => {
    let imgRedirect = document.createElement("a");
    imgRedirect.href = "/films" + item.href;
    let img = document.createElement("img");
    img.src = item.img;
    imgRedirect.classList.add("swiper-slide");
    img.classList.add("main__normal-slide-img");
    normalSliderLine.appendChild(imgRedirect);
    imgRedirect.appendChild(img);
})
comedyFilms.forEach((item) => {
    let imgRedirect = document.createElement("a");
    imgRedirect.href = "/films" + item.href;
    let img = document.createElement("img");
    img.src = item.img;
    imgRedirect.classList.add("swiper-slide");
    img.classList.add("main__normal-slide-img");
    secondNormalSliderLine.appendChild(imgRedirect);
    imgRedirect.appendChild(img);
});
fantasyFilms.forEach((item) => {
    let imgRedirect = document.createElement("a");
    imgRedirect.href = "/films" + item.href;
    let img = document.createElement("img");
    img.src = item.img;
    imgRedirect.classList.add("swiper-slide");
    img.classList.add("main__normal-slide-img");
    thirdNormalSliderLine.appendChild(imgRedirect);
    imgRedirect.appendChild(img);
})
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
});