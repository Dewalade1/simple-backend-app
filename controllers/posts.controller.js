const postService = require('../services/posts.service');

exports.addPost = ( req , res , next ) => {
    //perform input validation here
    const data = {
        description: req.body.description,
        imagePath: req.body.imagePath,
        addedByUserId: req.body.addedByUserId
    }

    postService.addPost( data, (error, results ) => {
        if (error) {
            if (error.errno === 1452) {
                console.log(error);
                return res.status(406).send({
                    success: false, 
                    data: 'Post addition failed. Invalid userid in post data'
                });

            } else if (error.errno !== 1452) {
                console.log(error);
                return res.status(400).send({
                    success: false, 
                    data: 'Bad Request'
                });
            }
        }

        return res.status(201).send({
            success: true,
            data: results
        })
    })
}

exports.getAllPosts = (req, res, next ) => {
    const data = {}

    postService.getAllPosts(data, (error, results ) => {
        if (error) {
            console.log(error)
            return res.status(400).send({
                success: false, 
                data: 'Error occured while fetching posts'
            })
        }

        if (results.length === 0) {
            return res.status(204).send({
                success: true, 
                data: 'No posts found'
            })
        }

        return res.status(200).send({
            success: true,
            data: results
        })
    })
}

exports.addPostComment = (req, res, next) => {
    const data = {
        postId: req.body.postId,
        comment: req.body.comment,
        addedByUserId: req.body.addedByUserId
    };
    postService.addPostComment( data,( error, results ) => {
        if (error) {
            if (error.errno === 1452) {
                console.log(error);
                return res.status(406).send({
                    success: false,
                    data: 'Could not add comment. Invalid postId or userId was given'
                });
            } else if (error.errno !== 1452) {
                console.log(error);
                return res.status(400).send({
                    success: false,
                    data: 'Bad Request'
                });
            };
        };

        return res.status(201).send({
            success: true,
            data: results
        });
    })
}