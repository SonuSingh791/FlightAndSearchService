const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig.js');

const ApiRoutes = require('./routes/index');

const setUpAndStartServer = async function () {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);
    app.listen(PORT, function(){
        console.log('Server started listening on port', PORT); 
    });
};

setUpAndStartServer(); 
