const userController = require('../controllers/users.controller');

var express = require('express');

var router = express.Router();

router.post('/register', userController.register);
/**
* @swagger
* /users/register:
*   post:
*      description: Route for registering a new user
*      tags:
*          - users
*      parameters:
*          - in: body
*            name: User
*            description: User registration data
*            schema:
*              type: object
*              required:
*                 - firstName
*                 - lastName
*                 - emailId
*                 - password
*              properties:
*                  firstName:
*                      type: string
*                      minLength: 1
*                      maxLength: 45
*                      example: John
*                  lastName:
*                      type: string
*                      minLength: 1
*                      maxLength: 50
*                      example: Doe
*                  emailId:
*                      type: string
*                      minLength: 6
*                      maxlength: 100
*                      example: johndoe@example.com
*                  password:
*                      type: string
*                      minLength: 5
*                      maxLength: 45
*                      example: johnDoe55#
*      responses:
*          '201':
 *             description: User Registration Successful
*          '400':
*              description: Bad Request
*          '409':
*              description: User already regisered
*          '500':
*              description: Internal Server Error
*/


router.post('/login', userController.login);
/**
* @swagger
* /users/login:
*   post:
*      description: Route for login a new user into our app. User must be registered befor they can be logged in
*      tags:
*          - users
*      parameters:
*          - in: body
*            name: User
*            description: User login data. Use correct login credentials to get success response
*            schema:
*              type: object
*              required:
*                 - emailId
*                 - password
*              properties:
*                  emailId:
*                      type: string
*                      minLength: 6
*                      maxlength: 100
*                      example: johndoe@example.com
*                  password:
*                      type: string
*                      minLength: 5
*                      maxLength: 45
*                      example: johnDoe55#
*      responses:
*          '200':
 *             description: User Login Successful
*          '400':
*              description: Something was wrong with your request
*          '406':
*              description: Invalid User Login Credentials
*          '500':
*              description: Internal Server Error
*/

module.exports = router;