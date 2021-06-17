const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const userRoutes = require('./routes/users.route');

const app = express();

const port = 3001;

app.use(bodyParser.json());

/* Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "first Node API",
            description: "API documentation of my first Nodejs API",
            contact: {
                name: "Dewa",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/* Swagger Initialization - END */

// app.use('/', ( req , res ) => {
    // console.log('Congrats! You are at first API home route!!')
    // return res.status(200).send('Welcome to the first API homepage!')
// })

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