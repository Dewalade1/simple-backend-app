const cors = require('cors');
const express = require('express');
const moesif = require('moesif-nodejs');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const postRoutes = require('./routes/posts.route');
const userRoutes = require('./routes/users.route');

const app = express();

const port = process.env.PORT || 8080;

/* CORS Initialization - START */
const allowedOrigins = ['http://localhost:3000',
                      'http://localhost:3001',
                      'http://localhost:4000',
                      'http://localhost:8080',
                      'https://simple-node-backend-app.herokuapp.com/',
                      ];
                      
app.use(cors({
  origin: function(origin, callback){

    if(!origin) return callback(null, true); // Allows mobiles and tablets
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not ' +
                'allow access from the Origin you are using.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
/* CORS Initialization - END */


app.use(bodyParser.json());

/* Moesif Initialization - START */
const moesifMiddleware = moesif({
  applicationId: process.env.MOESIF_APPLICATION_ID,

  // Optional hook to link API calls to users
  identifyUser: function (req, res) {
    return req.user ? req.user.id : undefined;
  },
});

moesifMiddleware.startCaptureOutgoing();

app.use(moesifMiddleware);
/* Moesif Initialization - END */


/* Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "first Node API",
            description: "API documentation of my first Nodejs API",
            contact: {
                name: "Dewalade",
            },
            servers: ["http://localhost:8080/",'http://localhost:3001','http://localhost:4000','http://localhost:8080',"https://simple-node-backend-app.herokuapp.com/"],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/* Swagger Initialization - END */


// HOME ENDPOINT
app.get('/', ( req , res ) => {
    return res.status(200).send('Welcome to the first API homepage!')
})

/**
* @swagger
* /:
*   get:
*      description: Use this to test the first-API route
*      tags:
*          - home
*      responses:
*          '200':
 *             description: Test Successful
*          '400':
*              description: Bad Request
*          '500':
*              description: Internal Server Error
*/


// TEST ENDPOINT
app.get('/test', (req, res) => {

    return res.status(200).send('Congrats! Test Successful. Welcome to the first-API backend!!');
});

/**
* @swagger
* /test:
*   get:
*      description: Use this to test the first-API route
*      tags:
*          - test
*      responses:
*          '200':
 *             description: Test Successful
*          '400':
*              description: Bad Request
*          '500':
*              description: Internal Server Error
*/

// MAIN API ENDPOINTS
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen( port , () => {
    console.log('\n[*] Starting first-post app');
    console.log('[+] App is now running');
    console.log('[+] Listening on port ' + port + '...');
});