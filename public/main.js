const socket = io();

socket.on("connect", ()=> {
    console.log("connected to server")
})

// CHAT -----------------------------------------------------

socket.on("INIT", (messages)=> {
    document.getElementById("posts").innerHTML = "";
    let msgArray = JSON.parse(messages);
    msgArray.forEach(msg => appendMessage(msg));
});


socket.on("NEW_MESSAGE", (msg) => {
    appendMessage(msg)
});

function appendMessage(msg) {
    document.getElementById("posts").innerHTML += `
    <div class="post">
        <p>
            <span class="email">${msg.author.id}</span><span class="date">[${msg.date}</span>]: <span class="msg">${msg.message}</span>
        </p>
    </div>
    `;
}

function sendMessage() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const alias = document.getElementById("alias").value;
    const avatar = document.getElementById("avatar").value;

    let msg = {author: {id: email, name, lastName, age, alias, avatar}, message}

    console.log(msg)
    /* if (!email) return; */
    socket.emit("POST_MESSAGE", msg)
}
