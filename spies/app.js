var db = require('./db.js')

module.exports.handleSignup = (email, password) => {
    //check if email already exists
    db.saveUser({
        email: email,
        password: password
    })
    //save the user to database
    //send the welcome message
}