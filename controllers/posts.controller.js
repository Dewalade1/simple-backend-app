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
            if (error.errno !== 1452) {
                console.log(error);
                return res.status(406).send({
                    success: false, 
                    data: 'Post addition failed. Invalid userid in post'
                });

            } else if (error.errno === 1452) {
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