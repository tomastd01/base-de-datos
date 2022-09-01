const express = require("express");
const productRouter = require("./routes/productRoutes");
const chatSvcs = require("./services/chatServices")
const {Server: HTTPServer} = require("http");
const {Server: SocketServer} = require("socket.io");
const app = express();
const httpServer = new HTTPServer(app);
const io = new SocketServer(httpServer);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRouter);


io.on("connection", (socket) => {
    console.log("new client");
    io.emit("INIT", chatSvcs.getAll())


    socket.on("POST_MESSAGE", (msg) => {
        let date = new Date()
        const newMsg = {...msg, date: date.toLocaleString()};
        chatSvcs.saveNewMessage(newMsg);
        io.sockets.emit("NEW_MESSAGE", newMsg);
    })
    
})



const PORT = process.env.PORT || 8080;

const server = httpServer.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

server.on("error", err => {
    console.log(`server error: ${err}`)
})