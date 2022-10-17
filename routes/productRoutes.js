const express = require("express");
const productRouter = express.Router();
const productCtrl = require("../controllers/productControllers");
const {validateProduct} = require("../validators/productValidator");
/* const { validateID } = require("../validators/uuidValidator"); */


productRouter 
    .route("/")
    .get(productCtrl.getAll)
    .post( productCtrl.saveNewProduct)

productRouter 
    .route("/:id")
    .get(productCtrl.getById)
    .put( productCtrl.replaceById)
    .delete(productCtrl.deleteById)

module.exports = productRouter;