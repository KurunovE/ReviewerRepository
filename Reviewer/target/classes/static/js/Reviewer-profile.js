const avatar = document.querySelector(".main__head-avatar");
const username = document.querySelector(".main__head-username");
const email = document.querySelector(".main__head-email");
const profileButton = document.querySelector(".profile-redirect");
const settingsButton = document.querySelector(".settings-redirect");
const profileContent = document.querySelector(".profile-content");
const settingsContent = document.querySelector(".settings-content");
const currentAvatar = "profile2.jpg"
const currentUsername = "Vasserman2004";
const currentEmail = "vass2004@gmail.com";
profileButton.addEventListener("click", ()=>{
    settingsButton.classList.remove("current-page");
    profileButton.classList.add("current-page");
    settingsContent.classList.remove("content-active");
    settingsContent.classList.add("content-inactive");
    profileContent.classList.remove("content-inactive");
    profileContent.classList.add("content-active");

})
settingsButton.addEventListener("click", ()=>{
    profileButton.classList.remove("current-page");
    settingsButton.classList.add("current-page");
    profileContent.classList.remove("content-active");
    profileContent.classList.add("content-inactive");
    settingsContent.classList.remove("content-inactive");
    settingsContent.classList.add("content-active");

})
avatar.src = `/avatar/${currentAvatar}`;
