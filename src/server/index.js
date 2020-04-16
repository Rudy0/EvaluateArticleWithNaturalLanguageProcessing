var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log(__dirname);

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
