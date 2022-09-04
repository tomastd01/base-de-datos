
const knex = require("knex");
const knexConfig = require("../knexfile")
const db = knex(knexConfig);
const tableName = "messages";


    const getAll = async () => {
        try {
            const messages = await db(tableName).select();
            return JSON.stringify(messages)
        } catch(err) {
            console.log(err)
        }
    }

    const saveNewMessage = async (message) => {
        try {
            await db(tableName).insert(message);
        } catch(err) {
            console.log(err)
        }
    }

module.exports = {getAll, saveNewMessage};