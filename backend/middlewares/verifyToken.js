const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization) {
        res.status(400).json("You're not authenticated")
    }
    next();    
}

const verifyTokenAndAuthorization = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization) {
        res.status(400).json("You're not authenticated")
    }

    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (tokenErr, tokenData) => {
        if(tokenErr){
            return res.status(500).json("Token verification error")
        } else {
            const { id } = tokenData;

            if(id !== req.params.id) {
            res.status(400).json("You're not authorized")
            } else {
            next();
            }
        }

    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization }