const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const http = require('http')
const server = http.createServer(app)
const socket = require ('socket.io')
const bodyParser = require('body-parser');





//seteamos el motor de plantillas ejs
app.set('view engine', 'ejs')

//seteamos la carpeta public
app.use(express.static('public'))



//para procesar datos enviados desde forms
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con las cookies
app.use(cookieParser())

//llamar al router
app.use('/', require('./routes/router'))



//Para eliminar el cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});




server.listen(3000), function () {
    console.log("Server started");
};

const io = socket(server);
require('./utils/socket')(io);
