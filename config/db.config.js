// This file creates a connection to the mysql db setup on heroku when run

const { createPool } = require('mysql'); // Install mysql npm package first

/** Connection pool creation - START **/
const db = createPool({
    port: 3306,
    host: "us-cdbr-east-04.cleardb.com",
    user: "b73e5cdf7dcb9a",
    password: "366aa6fa",
    database: "heroku_9a15b6c7a0a1116",
    connectionLimit: 10,
});
/** Connection Pool creation - END **/

module.exports = db;