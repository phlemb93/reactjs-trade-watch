const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGODB_URI, { dbName: 'trade-watch', useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {
    console.log("DB is connected")
})

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is connected")
})