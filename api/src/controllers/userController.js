const Users = require('../models/Users.js');
const bcrypt = require("bcryptjs");

async function signUp(req, res) {
    const { fullName, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user_exists = await Users.findOne({ email: email });
    
    if (user_exists) {
        res.status(400).json({ message: 'User already exists' });
    } else {
        const user = new Users({
            fullName,
            email,
            password: hashPassword
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    }
}

async function signIn(req, res) {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(200).json({ message: 'Sign in successful' });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(400).json({ message: 'User not found' });
    }
}

module.exports = {
    signUp,
    signIn
}