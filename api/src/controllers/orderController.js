const Order = require('../models/Order.js');

const addOrderItems = async (req, res) => {
    const products = req.body.basket;
    const price = req.body.price;
    const email = req.body.email;
    const address = req.body.address;

    const order = new Order({
        products,
        price,
        email,
        address
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getOrders = async (req, res) => {
    const email = req.body.email;

    try {
        await Order.find((err, result) => {
            if (err) {
                res.status(400).json({ message: err.message });
            } else {
                const userOrders = result.filter(order => order.email === email);
                res.json(userOrders);
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    addOrderItems,
    getOrders
}