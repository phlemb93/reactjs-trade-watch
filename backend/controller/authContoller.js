const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');


const user_register = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json('All fields must be filled')
    }
    if(!validator.isEmail(email)) {
        return res.status(400).json('Enter a valid email address')
    }
    if(!validator.isStrongPassword(password)) {
        return res.status(400).json('Enter a strong password')
    }

    //Check if user already exist
    const userExist = await User.find({ email });
    if(userExist) {
        return res.status(400).json('Email already taken')
    }

    //Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //Post the details to the database
    const user = await User.create({
        email, 
        password: hash
    })

    //Create a Token
    if(user) {
        const { id, email } = user;

        jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' }, (err, data) => {
            if(err) {
                console.log(err)
            } else {
                res.status(200).json({ token:data, id, email })
            }
        })
    }

}

const user_login = async (req, res) => {

    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json('All fields must be filled')
    }
    if(!validator.isEmail(email)) {
        return res.status(400).json('Invalid email address')
    }

    //Validate user from the database
    const userExist = await User.findOne({ email });

    if(!userExist){
        return res.status(400).json('Invalid email address')
    }

    //Get the user password from the database
    const savedPassword = userExist.password;

    //Compare password
    const match = await bcrypt.compare(password, savedPassword);

    if(!match) {
        return res.status(400).json('Incorrect password')
    } else {

         //Generate a Token
        if(userExist) {
            const { id, email } = userExist;

            jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' }, (err, data) => {
                if(err) {
                    console.log(err)
                } else {
                    res.status(200).json({ token:data, id, email })
                }
            })
        }
    }
}



module.exports = { user_register, user_login }