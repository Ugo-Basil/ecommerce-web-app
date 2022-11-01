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
    await Products.find((data, err) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
}

module.exports = {
    addProduct,
    getProducts
}