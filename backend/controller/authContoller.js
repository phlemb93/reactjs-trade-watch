
const user_register = (req, res) => {
    res.send('User Registers')
}

const user_login = (req, res) => {
    res.send('User Login')
}

module.exports = { user_register, user_login }