const postController = require('../controllers/posts.controller');

const express = require('express');

const router = express.Router();

router.post('/add-post', postController.addPost);
/**
* @swagger
* /posts/add-post:
*   post:
*      description: Route for Users to make a post to the blog.
*      tags:
*          - posts
*      parameters:
*          - in: body
*            name: Post
*            description: Post data
*            schema:
*              type: object
*              required:
*                 - description
*                 - imagePath
*                 - addedByUserId
*              properties:
*                  description:
*                      type: string
*                      minLength: 1
*                      maxlength: 2000
*                      example: This is a sample blog post. For test purposes only
*                  imagePath:
*                      type: string
*                      minLength: 1
*                      maxLength: 1000
*                      example: /funny/image001.png
*                  addedByUserId:
*                      type: integer
*                      example: 155
*      responses:
*          '200':
 *             description: Post has been added Successfully
*          '400':
*              description: Post could not be submitted
*          '404':
*              description: Post route not found
*          '406':
*              description: Invalid posts credentials
*          '500':
*              description: Internal Server Error
*/

module.exports = router;