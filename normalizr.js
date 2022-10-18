const {denormalize, normalize, schema} = require("normalizr");
const fs = require("fs")
const data = require("./database/messages.json");


const authorSchema = new schema.Entity("authors");

const messageSchema = new schema.Entity("messages", {
    author: authorSchema
})

const messages = new schema.Array(messageSchema);

const normalized = normalize(data, messages);

fs.writeFileSync("./database/normalizedMessages.json", JSON.stringify(normalized, null, 2))


// ---------------------------------------------

/* const denormalized = denormalize(Object.keys(normalized.entities.messages), messages, normalized.entities);

console.log("Desnormalized:", JSON.stringify(denormalized, null, 2)); */



module.exports = {normalized}