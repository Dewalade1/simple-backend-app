const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users.route');

const app = express();

const port = 3001;

app.use(bodyParser.json());

// app.use('/', ( req , res ) => {
    // console.log('Congrats! You are at first API home route!!')
    // return res.status(200).send('Welcome to the first API homepage!')
// })
// 
// TEST ENDPOINT
app.use('/test', (req, res) => {
    console.log("Congrats! Your test route works!!!");
    return res.status(200).send('Test Successful');
});

// MAIN API ENDPOINTS
app.use('/users', userRoutes);

app.listen( port , () => {
    console.log('\n[*] Starting first-post app');
    console.log('[+] App is now running');
    console.log('[+] Listening on port ' + port + '...');
});