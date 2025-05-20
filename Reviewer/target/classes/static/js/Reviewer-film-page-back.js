const artists = document.querySelector(".main-content__starring");
const rating = document.querySelector(".head__film-rating");
let ratingNumber = +rating.textContent;
console.log(ratingNumber);
document.addEventListener("DOMContentLoaded",()=>{
    artists.textContent = artists.textContent.slice(1,-1).split(", ").join("\n");
})
