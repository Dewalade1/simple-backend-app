const db = require('../config/db.config');

exports.addPost = (data, callback) => {
    db.query(
        `INSERT INTO posts (description, imagePath, datetimeCreated, addedByUserId) VALUES ( ? , ? , ? , ? )`,
        [data.description, data.imagePath, new Date(), data.addedByUserId],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, 'Post added Successfully');
        }
    )
}

exports.getAllPosts = (data, callback) => {
    db.query(
        `SELECT post.id AS postId, post.description, post.datetimeCreated,
         post.likeCount, post.dislikeCount, post.addedByUserId, user.firstName,
         user.lastName FROM posts AS post INNER JOIN users AS user ON post.addedByUserId 
         = user.id`,
         [],
         (error, results, fields) => {
             if (error) {
                 return callback(error);
             }

             return callback(null, results);
         }
    );
};

exports.addPostComment = (data, callback) => {
    db.query(
        `INSERT INTO comments (postId, comment, datetimeCreated, addedByUserId)
         VALUES ( ? , ? , ? , ? )`,
        [data.postId, data.comment, new Date(), data.addedByUserId],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, 'Comment Added Successfully')
        }
    )
}

exports.getAllCommentsForOnePost = (data, callback) => {
    db.query(
        `SELECT comments.comment, comments.datetimeCreated, comments.addedByUserId,
         users.firstName, users.lastName FROM comments INNER JOIN users ON 
         comments.addedByUserId = users.id WHERE comments.postId = ?`,
    [data.postId],
    (error, results, fields) => {
        if (error) {
            return callback(error);
        }

        return callback(null, results)
    }
    )
}

exports.likePost = ( data , callback ) => {
    db.query(
        `UPDATE posts
         SET likeCount = likeCount + 1
         WHERE id = ?`,
         [data.postId],
         (error, results, fields) => {
             if (error) {
                 return callback(error);
             }
            if (results.affectedRows === 1) {
                return callback(null, 'Post was liked')
            } else {
                return callback(new Error('Post does not exist'))
            }
         }
    )
}