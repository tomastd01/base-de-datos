const express = require("express");
const productRouter = require("./routes/productRoutes");
const {getAll, saveNewMessage} = require("./services/chatServices")
const {Server: HTTPServer, get} = require("http");
const {Server: SocketServer} = require("socket.io");
const app = express();
const httpServer = new HTTPServer(app);
const io = new SocketServer(httpServer);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRouter);


const knex = require("knex");
const knexConfig = require("./knexfile")
const db = knex(knexConfig);
const tableName = "messages";


io.on("connection", async (socket) => {
    console.log("new client");
    io.emit("INIT", await getAll())


    socket.on("POST_MESSAGE", async (msg) => {
        let date = new Date()
        const newMsg = {...msg, date: date.toLocaleString()};
        await saveNewMessage(newMsg);
        io.sockets.emit("NEW_MESSAGE", newMsg);
    })
    
})


const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

