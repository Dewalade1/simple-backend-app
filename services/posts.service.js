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
         user.lastName FROM posts AS post INNERJOIN users AS user ON post.addedByUserId 
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