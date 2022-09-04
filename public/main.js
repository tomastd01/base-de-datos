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
            <span class="email">${msg.email}</span><span class="date">[${msg.date}</span>]: <span class="msg">${msg.message}</span>
        </p>
    </div>
    `;
}

function sendMessage() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (!email) return;
    socket.emit("POST_MESSAGE", {email, message})
}
