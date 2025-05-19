const artists = document.querySelector(".main-content__starring");
const rating = document.querySelector(".head__film-rating");
let ratingNumber = +rating.textContent;
if (ratingNumber >= 7){
    rating.style.color = "green";
}
else if (ratingNumber >=4){
    rating.style.color = "orange";
}
else{
    rating.style.color = "red";
}

let artistArray = artists.textContent.slice(1,-1).split(", ").join("\n");
artists.textContent = artistArray;