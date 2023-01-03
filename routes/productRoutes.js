const express = require('express')
const productData = require('../data/productData.json')
const router = express.Router();

router.get('/', (req, res) => {
    const { category } = req.query;
    if (category) {
        const filteredProducts = productData.filter((product) => {
            return product.category === category
        })
        res.render('index', { productData: filteredProducts })
    } else {
        res.render('index', { productData })
    }
})

router.get('/:productID', (req, res) => {
    const { productID } = req.params
    if (productID > 0 && productID <= productData.length) {
        res.json(productData[productID - 1])
    } else {
        res.send("Index out of bound")
    }
})

module.exports = router;