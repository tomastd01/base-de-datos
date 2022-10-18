const db = require("./messages.json");
const normalized = require("./normalizedMessages.json")

const getAllMessages = () => {
        const messages= db
        return messages;
}

const getAllNormalizedData = () => {
        const messages = normalized;
        return messages
}

module.exports = {getAllMessages, getAllNormalizedData}