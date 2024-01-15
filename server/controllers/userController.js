const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust the path as needed

// Register ------
exports.registerUser = async (req, res) => {
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
        res.status(500).json({ message: error.message });
    }
}

// Login ---
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Here, you should also create and send a token for authentication
        // e.g., using JWT

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
