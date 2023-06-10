//IMPORT DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//CONFIG
require('dotenv').config();
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//IMPORT ROUTES
const authRoutes = require('./route/authRoutes')
const userRoutes = require('./route/userRoutes')




//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODB_URI, { dbName: 'trade-watch', useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {
    console.log("DB is connected")
    app.listen(process.env.PORT || 5000, () => {
        console.log("Backend server is connected")
    })
})

//ROUTES
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

