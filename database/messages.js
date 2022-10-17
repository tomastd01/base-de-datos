const db = require("./messages.json");

const getAllMessages = () => {
        const messages= db
        return messages;
}

module.exports = {getAllMessages}