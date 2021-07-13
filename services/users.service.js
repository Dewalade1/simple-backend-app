const db = require('../config/db.config');

exports.register = ( data, callback ) => {
    db.query(
        `INSERT INTO users (firstName, lastName, emailId, password) VALUES ( ? , ? , ? , ? )`,
        [data.firstName, data.lastName, data.emailId, data.password],
        (error, results, fields) => {
            if (error) {
                return callback(error, `User Registration Failed`);
            }

            return callback(null, `User Registration Successful`);
        }
    );
};

exports.login = ( data, callback ) => {
    db.query(
        `SELECT id FROM users WHERE emailId = ? AND PASSWORD = ?`,
        [data.emailId, data.password],
        (error, results, fields) => {
            if (error) {
                return callback(error, `User Login Failed`);
            }
            
            if (results.length > 0) {
                return callback(null, `User Login Successful`);
            } else {
                return callback(null, "User Credentials Invalid");
            }
        }
    )
}