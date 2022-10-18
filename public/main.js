const socket = io();

socket.on("connect", ()=> {
    console.log("connected to server")
})

// CHAT -----------------------------------------------------
const authorSchema = new schema.Entity("authors");

const messageSchema = new schema.Entity("messages", {
    author: authorSchema
})

const messages = new schema.Array(messageSchema);

async function denormalizeData(data) {
    const denormalizedData = denormalize(data.result, messages, data.entities)
    return JSON.stringify(denormalizedData);
}

socket.on("INIT", async (messages)=> {
    document.getElementById("posts").innerHTML = "";
    let msgArray = JSON.parse(denormalizeData(messages));
    console.log(msgArray)
    msgArray.forEach(msg => appendMessage(msg));
});


socket.on("NEW_MESSAGE", (msg) => {
    appendMessage(msg)
});

function appendMessage(msg) {
    document.getElementById("posts").innerHTML += `
    <div class="post">
        <p>
            <span class="email">${msg.author.id}</span><span class="date">[${msg.date}</span>]: <span class="msg">${msg.text}</span>
        </p>
    </div>
    `;
}

function sendMessage() {
    const email = document.getElementById("email").value;
    const text = document.getElementById("message").value;
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const alias = document.getElementById("alias").value;
    const avatar = document.getElementById("avatar").value;

    let msg = {author: {id: email, name, lastName, age, alias, avatar}, text}

    console.log(msg)
    socket.emit("POST_MESSAGE", msg)
}


