const {Router} = require("express");
const testRouter = Router();

const {faker} = require("@faker-js/faker");

function generateProducts(n) {
    const products = [];
    for(let i = 0; i < n; i++) {
        const product = {
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            imgUrl: faker.image.technics(200, 200, true)
        }
        products.push(product)
    }

    return products;
}

testRouter.get("/", (req, res) => {
    const num = req.query.cant || 5; 
    const productArray = generateProducts(num);
    res.json(productArray)
})

module.exports = testRouter;