const express = require('express');
const path = require('path')
let cors = require ('cors');
let {config}  = require('./config/index.js'); // no hace falta indicarle index.js, es por defecto.
let serverRoutes = require('./routes/routes.js');

let app = express();
app.set('view engine', 'pug');                        // template views engine
app.set('views', path.join(__dirname, './views'))     // views path
app.use(express.static(path.join(__dirname, './public'))) /// static css and js files for html
app.use(express.json());                              // interprets json format in post method
app.use(express.urlencoded({extended:true}));         // interprets json format in post method



app.use(cors(`${config.cors}`))                      // Middleware

const PORT = config.port                             // Global variable

serverRoutes(app);                                    // Routes

app.listen(PORT, ()=>{
  console.log('server on fire, listening dotenv', PORT, config.email_support)
})