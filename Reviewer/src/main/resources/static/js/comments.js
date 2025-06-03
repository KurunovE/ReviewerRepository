document.addEventListener("DOMContentLoaded",()=>{
        const commentCounter = document.querySelector(".comments__count");
        const addCommentButton = document.querySelector(".comments__add-comment");
        const commentList = document.querySelector(".comments__all-messages");
        const commentInput = document.querySelector(".comments__input");
        let counter = 0;
        function addComments (json) {
            json.forEach(item => {
                counter+=1;
                const listItem = document.createElement("li");
                listItem.classList.add("comment");
                const img = document.createElement("img");
                img.src = "/avatar/profile2.jpg";
                img.classList.add("user-img");
                const title = document.createElement("h4");
                title.classList.add("comment__username");
                title.textContent = item.username;
                const text = document.createElement("p");
                text.classList.add("comment__mainText");
                text.textContent = item.text;
                listItem.appendChild(img);
                listItem.appendChild(title);
                listItem.appendChild(text);
                commentList.appendChild(listItem);
            });
        }
        function getCurrentDateFormatted() {
            const now = new Date();

            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();

            return `${day}.${month}.${year}`;
        }
        async function getComments(){
            const getComments = await fetch("http://localhost:8081/api/v1/comments");
            let json = await getComments.json();
            json = json.reverse();
            await addComments(json);
            commentCounter.textContent = counter;
        }
        getComments();
        addCommentButton.addEventListener("click",async function (){
            if (commentInput.value){
                this.classList.add("disabled");
                const comment = {
                    username: (localStorageUsername)?localStorageUsername:"Гость",
                    date: getCurrentDateFormatted(),
                    text: commentInput.value
                }
                const saveComments = await fetch("http://localhost:8081/api/v1/comments/save_comment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(comment)
                })
                commentInput.value = "";
                this.classList.remove("disabled");
                location.reload();
            }
        })
})
