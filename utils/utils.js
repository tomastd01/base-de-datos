const {v4: uuid} = require("uuid");
const fs = require("fs")

const saveToDB = (array, file) => {
    fs.writeFileSync("./src/database/" + file, JSON.stringify(array, null, 2), {encoding: "utf-8"})
}

const addId = (newProduct) => {
    const productWithId = {
        id: uuid(),
        ...newProduct,
    }

    return productWithId
}

module.exports = {
    saveToDB,
    addId
}