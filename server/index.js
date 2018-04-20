require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , port = 3005
    , massive = require('massive')
    , controller = require('./controller')
    , cors = require('cors');

const { CONNECTION_STRING } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection);
    console.log('db connected')
})

app.post('/api/register', controller.register)
app.post('/api/login', controller.login)






app.listen(port, () => console.log('Nobody ever listens to ME', port));