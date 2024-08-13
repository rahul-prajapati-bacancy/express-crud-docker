const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());

app.use('/api', itemRoutes);

app.get('/', (req, res) => {
    res.status(400).json({ health: false })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
