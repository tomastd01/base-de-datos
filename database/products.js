const knex = require("knex");
const knexConfig = require("../knexfile")
const db = knex(knexConfig);
const tableName = "productos";

const getAllProducts = async () => {
    try {
        const products = await db(tableName).select();
        return products;
    } catch {
        return {error}
    }
};

module.exports = {getAllProducts}