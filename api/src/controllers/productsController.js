const express  = require('express')

const Products = require('../models/Product.js')


async function addProduct(req, res){
    const productDetail = req.body;
    
    console.log('Product Detail:', productDetail);
  await Products.create(productDetail, (data, err) => {
        if (err) {
            res.status(500).send(err.message);
            console.log(err);
        } else {
            res.status(201).send(data)
        }
    })
}

async function getProducts(req, res) {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
       
}
    

module.exports = {
    addProduct,
    getProducts
}