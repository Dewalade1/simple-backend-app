const userService = require('../services/users.service');

exports.register = (req, res, next) => {
    // perform validations on request here
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password,
    };
    userService.register(data, (error, results) => {
        if (error) {
            if (error.code !=='ER_DUP_ENTRY') {
                console.log(error);
                return res.status(400).send({
                    success: false, 
                    data: "Bad Request"
                });
            } else if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).send({
                    success: false, 
                    data: "User already regisered"
                });
            }
        }
        
        return res.status(201).send({
            success: true,
            data: results,
        });
    });
};