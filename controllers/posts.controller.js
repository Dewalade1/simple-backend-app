const postService = require('../services/posts.service');

exports.addPost = ( req , res , next ) => {
    //perform input validation here
    const data = {
        description: req.body.description,
        imagePath: req.body.imagePath,
        addedByUserId: req.bod.addedByUserId
    }

    postService.addPost( data, (error, results ) => {
        if (error) {
            console.log(error);
            return res.status(400).send({
                success: false, 
                data: 'Bad Request'
            });
        }

        return res.status(201).send({
            success: true,
            data: results
        })
    })
}