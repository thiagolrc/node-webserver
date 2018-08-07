var db = require('./db.js');

module.exports.handleSignup = (username, password) => {
    
    db.saveUser({username: username, password: password});
};