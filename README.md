![made with](https://img.shields.io/badge/made%20with-NodeJS-success?style=for-the-badge)

![Repo size](https://img.shields.io/github/repo-size/Dewalade1/simple-backend-app?style=for-the-badge)
![lines of code](https://img.shields.io/tokei/lines/github/Dewalade1/simple-backend-app?style=for-the-badge)

![language count](https://img.shields.io/github/languages/count/Dewalade1/simple-backend-app?style=for-the-badge)
![most language used](https://img.shields.io/github/languages/top/Dewalade1/simple-backend-app?style=for-the-badge)
![repo stars](https://img.shields.io/github/stars/Dewalade1/simple-backend-app?style=for-the-badge)
![pull requests](https://img.shields.io/github/issues-pr/Dewalade1/simple-backend-app?style=for-the-badge)
![Contributors](https://img.shields.io/github/contributors/Dewalade1/simple-backend-app?style=for-the-badge)

![license](https://img.shields.io/github/license/Dewalade1/simple-backend-app?style=for-the-badge)
![environments](https://img.shields.io/badge/environments%20-1-yellowgreen?style=for-the-badge)

![nodeserver-logo](./public/nodeserver-logo.png)

# Simple-nodejs-app

This is a RESTFUL API for a blog build using nodejs. It is a test and has no specific functions

## Tools used

* [CORS](https://expressjs.com/en/resources/middleware/cors.html) - for preventing Cross-Origin Resourse sharing
* [Moestif](https://www.moesif.com/docs/) - for tracking API usage
* [express](https://expressjs.com/) -  - for developing the API
* [Swagger](https://swagger.io/tools/swagger-ui/) - for documenting and testing the API
* [DBDocs](https://dbdocs.io/) - for documenting the Database
* [Heroku](https://www.heroku.com/) - for hosting the app
* [Git and GitHub](https://git-scm.com) - for tracking, storage and version control

## How to setup the app

### Option 1

* The app has been setup and deployed on [Heroku](https://www.heroku.com/)

### Option 2

Alternatively, you can do the following to setup the app locally. Run the commands below in your terminal or CMD:

1 Clone the repo using this command
```
git clone https://github.com/Dewalade1/simple-backend-app.git
```

2. Change directory to the repo folder
```
cd <path-to-repository>/simple-backend-app
```

3. Install the dependencies using npm 
```
npm i
```

4. See `Option 2` in the `How to start the app` section below to start the app


## How to start the app

### Option 1

* The easiest way to start up the app is to [click here](https://simple-node-backend-app.herokuapp.com/)
* If you connected successfully, You should see `Welcome to the first API homepage!` written in your browser window.

### Option 2

You can start the app locally or run it on a development environment using the following commands:
* **Start app locally**
```
npm start
```

* **Run on a local dev environment**
```
npm run dev
```

## Available Scripts

*  `npm start`

**Starts the app**
Open [http://localhost:8080](http://localhost:8080) in your browser to view it.
The page will refresh if you make edits to the code.
You will also see any compile and lint errors in the console.


* `npm run dev`

**Starts the app using a dev environment**
Open [http://localhost:8080](http://localhost:8080) in your browser to view it.
The page will refresh if you make edits to the code.
You will also see any compile and lint errors in the console.


## Useful Links

* [API home route](https://simple-node-backend-app.herokuapp.com/)
* [API docs](https://simple-node-backend-app.herokuapp.com/api-docs/)

## Notes

* The API docs allow users test the API by clicking the 'Try it out' button.

## SQL Database Schema

![db schema](./public/app-sql-schema.png)

## Further Improvements

* validate data using express-validator

![swaggerfornodejs](./public/swaggerfornodejs.jpg)