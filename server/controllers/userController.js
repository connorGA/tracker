const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

// secret key for JWT signing
const JWT_SECRET = process.env.JWT_SECRET

// Register ------
exports.registerUser = async (req, res) => {
    console.log('Register endpoint hit', req.body);
    try {
        const { username, email, password } = req.body;

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the user and send response
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.email) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        res.status(500).json({ message: error.message });
    }
};

// Login ---
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log("Fetched user:", user); // Debug log

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create a token
        const token = jwt.sign(
            { userId: user._id, email: user.email, name: user.username }, //maybe Add tracketItem here if name passed correctly
            JWT_SECRET,
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        res.status(200).json({ message: 'Login successful', token, name: user.username });
        console.log("Login response:", { token, name: user.username });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
