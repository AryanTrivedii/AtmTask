const Users = require("../models/userSchema");
const bcrypt = require('bcrypt');

// register API

const register = async (req, res) => {
    try {
        const { username, email, password, accountnumber, balance } = req.body;
        if (!username || !email || !password || !accountnumber || !balance) {
            return res.status(400).json({ error: 'Username, email, password, account number, and balance are required' });
        }
        const existingUser = await Users.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
            username,
            email,
            password: hashedPassword,
            accountnumber,
            balance
        });

        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


//login API

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }
        const user = await Users.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


//getdetails

const getAllDetails = (req, res) => {
    res.status(200).json({ message: "Route is fine" })
}

// check balance
const checkBalance = async (req, res) => {
    try {
        // Extract userID from request parameters
        const { userID } = req.params;

        // Find user in the database based on userID
        const user = await Users.findById(userID);

        // If user is not found, return error
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Extract userID and balance from the user object
        const { _id, balance } = user;

        // Send response with userID and balance
        return res.status(200).json({ userID: _id, balance });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    register,
    login,
    getAllDetails,
    checkBalance
}