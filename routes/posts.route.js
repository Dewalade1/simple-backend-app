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
*          '201':
 *             description: Post has been added Successfully
*          '400':
*              description: Post could not be submitted
*          '404':
*              description: Post route not found
*          '406':
*              description: Invalid posts credentials. Check User ID
*          '500':
*              description: Internal Server Error
*/

router.get('/get-all-posts', postController.getAllPosts)
/**
* @swagger
* /posts/get-all-posts:
*   get:
*      description: Gets all posts ever added to our blog
*      tags:
*          - posts
*      responses:
*          '200':
*              description: Query successful. Found and displayed all the available posts
*          '204':
*              description: Query successful but found no posts
*          '400':
*              description: An error occured while fetching posts. Possibly a bad request
*          '404':
*              description: get-all-posts route not found
*          '500':
*              description: Internal Server Error
*/

router.post('/add-post-comment', postController.addPostComment)
/**
* @swagger
* /posts/add-post-comment:
*   post:
*      description: Route for adding comments to saved posts.
*      tags:
*          - posts
*      parameters:
*          - in: body
*            name: Comment
*            description: Post Comment data
*            schema:
*              type: object
*              required:
*                 - postId
*                 - comment
*                 - addedByUserId
*              properties:
*                  postId:
*                      type: integer
*                      example: 1135
*                  comment:
*                      type: string
*                      minLength: 1
*                      maxLength: 1000
*                      example: Hello world
*                  addedByUserId:
*                      type: integer
*                      example: 295
*      responses:
*          '201':
 *             description: Comment has been added to post Successfully
*          '400':
*              description: Comment could not be submitted
*          '404':
*              description: Comment route not found
*          '406':
*              description: Invalid comment credentials. Check User ID or post ID
*          '500':
*              description: Internal Server Error
*/

router.get('/get-all-comments-for-one-post', postController.getAllCommentsForOnePost)
/**
* @swagger
* /posts/get-all-comments-for-one-post:
*   get:
*      description: Gets all the comments that were added to a single blog post
*      tags:
*          - posts
*      parameters:
*          - in: query
*            name: postId
*            type: integer
*            description: Id of post whose comment we want to fetch
*            required: true
*      responses:
*          '200':
*              description: Query successful. Found and displayed all the available comments
*          '204':
*              description: Query successful but found no comments
*          '400':
*              description: An error occured while fetching comments. Possibly a bad request
*          '404':
*              description: get-all-comments-for-one-post not found
*          '500':
*              description: Internal Server Error
*/

router.put('/like-post', postController.likePost)
/**
* @swagger
* /posts/like-post:
*   put:
*      description: Used to like a blog post
*      tags:
*          - posts
*      parameters:
*          - in: body
*            name: Post
*            description: Data of post we want to like
*            schema:
*              type: object
*              required:
*                 - postId
*              properties:
*                  postId:
*                      type: integer
*                      example: 1135
*      responses:
*          '204':
*              description: Post was successfully liked
*          '400':
*              description: An error occured while liking the post. Possibly a bad request
*          '404':
*              description: Post to be liked was not found
*          '500':
*              description: Internal Server Error
*/

module.exports = router;