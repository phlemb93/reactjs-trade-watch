
const get_all_users = (req, res) => {
    res.json('Get all users')
}

const get_single_user = (req, res) => {
    res.json('Get single user')
}
const update_single_user = (req, res) => {
    res.json('Update user details')
}
const delete_single_user = (req, res) => {
    res.json('Delete user')
}

module.exports = { get_all_users, get_single_user, update_single_user, delete_single_user }