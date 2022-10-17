const fs = require("fs")
const {getAllMessages} = require("../database/messages.js")

    const getAll = async () => {
        try {
            const messages = getAllMessages();
            return JSON.stringify(messages)
        } catch(err) {
            console.log(err)
        }
    }

    const saveNewMessage = async (message) => {
        try {
            const messages = getAllMessages();
            messages.push(message);
            fs.writeFileSync("./database/messages.json", JSON.stringify(messages, null, 2), {encoding: "utf-8"})
        } catch(err) {
            console.log("Error neneeee",err)
        }
    }

module.exports = {getAll, saveNewMessage};