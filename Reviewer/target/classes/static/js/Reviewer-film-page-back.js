const artists = document.querySelector(".main-content__starring");
const rating = document.querySelector(".head__film-rating");
let ratingNumber = +rating.textContent;
console.log(ratingNumber);
document.addEventListener("DOMContentLoaded",()=>{
    if (ratingNumber > 8){
        rating.style.color = "green !important";
    }
    else if (ratingNumber > 6){
        rating.style.color = "#3FCF74 !important";
    }
    else if (ratingNumber > 4){
        rating.style.color = "orange !important";
    }
    else{
        rating.style.color = "red !important";
    }
    artists.textContent = artists.textContent.slice(1,-1).split(", ").join("\n");
})
