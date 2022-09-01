
const knex = require("knex");
const knexConfig = require("../knexfile")
const db = knex(knexConfig);
const tableName = "messages";

class chatServices {

    getAll = async () => {
        try {
            const messages = await db(tableName).select();
            return messages
        } catch(err) {
            console.log(err)
        }
    }

    saveNewMessage = async (message) => {
        try {
            await db(tableName).insert(message);
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = new chatServices;