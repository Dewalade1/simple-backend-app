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
                console.log(error);
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

exports.login = ( req, res, next) => {
    // Validate login details here
    const data = {
        emailId: req.body.emailId,
        password: req.body.password,
    }
    userService.login(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({
                success: false, 
                data: 'Bad Request'
            })
        }

        if (results === 'User Credentials Invalid' ) {
            return res.status(406).send({
                success: false, 
                data: 'Invallid User Credentials'
            })
        }
        console.log(results)

        return res.status(200).send({
            success: true,
            data: results,
        })
    })
}