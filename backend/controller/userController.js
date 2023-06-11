const User = require('../model/userModel')


//GET SINGLE USER
const get_single_user = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if(!user) {
       return res.status(400).json("User does not exist");
    } else {
        const { id, email } = user;

        return res.status(200).json({ id, email})
    }
}

//UPDATE USER'S DETAILS
const update_single_user = async (req, res) => {
    
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body, { new: true });

    if(!user) {
       return res.status(400).json("User does not exist");
    } else {
        const { id, email } = user;

        return res.status(200).json({ id, email})
    }
}

//DELETE USER
const delete_single_user = async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if(!user) {
       return res.status(400).json("User does not exist");
    } else {
        res.status(200).json("User successfully deleted")
    }
}

module.exports = { get_single_user, update_single_user, delete_single_user }