const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const trackerItemRoutes = require('./routes/trackerItemRoutes');

const port = process.env.PORT || 5000;

// database
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB NOT connected"))

//middleware
app.use(cors());


app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/trackerItems', trackerItemRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port} :)`)
})