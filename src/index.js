const express = require('express');
const {PORT} = require('./config/serverConfig.js');

const setUpAndStartServer = async function () {
    const app = express();

    app.listen(PORT, function(){
        console.log('Server started listening on port', PORT); 
    });

};

setUpAndStartServer(); 
