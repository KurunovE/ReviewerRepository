const avatar = document.querySelector(".main__head-avatar");
const pageEmail = document.querySelector(".main__head-email");
const profileButton = document.querySelector(".profile-redirect");
const settingsButton = document.querySelector(".settings-redirect");
const profileContent = document.querySelector(".profile-content");
const settingsContent = document.querySelector(".settings-content");
const profileSaveButton = document.querySelector(".profile-info");
const profileInputs = document.querySelectorAll(".profile-content .main__profile-content-inputs input");
const settingsInputs = document.querySelectorAll(".settings-content .main__profile-content-inputs input");
const settingsSaveButton = document.querySelector(".settings");
const settingsAlert = document.querySelector(".settings-alert");
const profileAlert = document.querySelector(".profile-alert");
const currentAvatar = "profile2.jpg"
const userObject = {
}
profileButton.addEventListener("click", ()=>{
    settingsAlert.classList.add("hidden")
    settingsInputs.forEach(item=>{
        const label = document.querySelector(`label[for="${item.id}"]`);
        label.classList.remove("label-error");
        item.classList.remove("input-inactive");
    })
    settingsButton.classList.remove("current-page");
    profileButton.classList.add("current-page");
    settingsContent.classList.remove("content-active");
    settingsContent.classList.add("content-inactive");
    profileContent.classList.remove("content-inactive");
    profileContent.classList.add("content-active");


})
settingsButton.addEventListener("click", ()=>{
    profileAlert.classList.add("hidden");
    profileInputs.forEach(item=>{
        const label = document.querySelector(`label[for="${item.id}"]`);
        label.classList.remove("label-error");
        item.classList.remove("input-inactive");
    })
    profileButton.classList.remove("current-page");
    settingsButton.classList.add("current-page");
    profileContent.classList.remove("content-active");
    profileContent.classList.add("content-inactive");
    settingsContent.classList.remove("content-inactive");
    settingsContent.classList.add("content-active");

})
avatar.src = `/avatar/${currentAvatar}`;
async function getUser(){
    let promise = await fetch(`http://localhost:8081/api/v1/user?email=${pageEmail.textContent}`);
    let json = await promise.json();
    userObject.id = json.id +"";
    userObject.username = json.username;
    userObject.email = json.email;
    userObject.password = json.password;
    userObject.firstName = json.firstName;
    userObject.lastName = json.lastName;
    userObject.birthday = "2004-04-17";
    userObject.age = "0";
    profileInputs[1].value = json.lastName;
    profileInputs[0].value = json.firstName;
}
getUser();
profileSaveButton.addEventListener("click",async function (){
    let flag = true;
    profileInputs.forEach(item => {
        const label = document.querySelector(`label[for="${item.id}"]`);
        if (!item.value){
            item.addEventListener("focus",()=>{
                item.classList.remove("input-inactive");
                label.classList.remove("label-error");
            })
            flag = false;
            item.classList.add("input-inactive");
            label.classList.add("label-error");
        }
    })
    if (flag){
        this.classList.add("disabled");
        profileAlert.style.color = "green";
        profileAlert.classList.remove("hidden")
        userObject.firstName = profileInputs[0].value;
        userObject.lastName = profileInputs[1].value;
        console.log(profileInputs[0].value,profileInputs[1].value);
        console.log(userObject);
        let promise = await fetch("http://localhost:8081/api/v1/user/update",{
        method: 'PUT',
            headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
        })
        this.classList.remove("disabled");
    }
});
settingsSaveButton.addEventListener("click",async function(){
    let flag = true;
    settingsInputs.forEach(item => {
        const label = document.querySelector(`label[for="${item.id}"]`);
        item.addEventListener("focus",()=>{
            settingsAlert.classList.add("hidden");
        })
        if (!item.value){
            item.addEventListener("focus",()=>{
                item.classList.remove("input-inactive");
                label.classList.remove("label-error");
            })
            flag = false;
            item.classList.add("input-inactive");
            label.classList.add("label-error");
        }
    })
    if (flag && (settingsInputs[0].value === settingsInputs[1].value)){
        this.classList.add("disabled");
        settingsAlert.style.color = "green";
        settingsAlert.textContent = "Пароль изменен";
        settingsAlert.classList.remove("hidden");
        userObject.password = settingsInputs[0].value;
        let promise = await fetch("http://localhost:8081/api/v1/user/update",{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })
        this.classList.remove("disabled");

    }
    else if (settingsInputs[0].value !== settingsInputs[1].value){
        settingsInputs.forEach(item=>{
            item.value = "";
            const label = document.querySelector(`label[for="${item.id}"]`);
            item.classList.add("input-inactive");
            label.classList.add("label-error");
            item.addEventListener("focus",()=> {
                item.classList.remove("input-inactive");
                label.classList.remove("label-error");
            });
        })
        settingsAlert.style.color = "red";
        settingsAlert.textContent = "Пароли не совпадают";
        settingsAlert.classList.remove("hidden");

    }

})





