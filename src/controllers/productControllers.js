const productSvcs = require("../services/productServices");

const knex = require("knex");
const knexConfig = require("../knexfile")
const db = knex(knexConfig);
const tableName = "productos";

class productControllers {
    
    getAll = async (req, res) => {
        try {
            res.status(200).send(await productSvcs.getAll())
        } catch(err) {
            res.send(err)
        }
    }

    saveNewProduct = async (req, res) => {
        try {
            const {body} = req;
            const newProduct = await db(tableName).insert(body);
            res.send(newProduct);
        } catch(err) {
            res.send(err)
        }
    }

    getById = async (req, res) => { 

        try {
            const {id} = req.params;
            const product = await db(tableName)
                .select()
                .where("id", id)
            res.send(product)
        } catch(err){
            res.send(err)
        }
    }

    replaceById = async (req, res) => {

        try {
            const {id} = req.params;
            const {body} = req;
            const newProduct = await db(tableName)
                .where({id: id})
                .update(body)
            res.send({body, id: newProduct});
        } catch(err) {
            res.send(err)
        }

    }
    

    deleteById = async(req, res) => {
        const {id} = req.params;
        try {
            await db(tableName)
                .where({id: id})
                .del()
            res.json({message:"Product has been removed"})
        } catch(err) {
            res.send(err)
        }
    }

}

module.exports = new productControllers;