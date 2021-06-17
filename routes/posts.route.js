const postController = require('../controllers/posts.controller');

const express = require('express');

const router = express.Router();

router.post('/add-post', postController.addPost);

module.exports = router;