const express = require('express');
const path = require('path')
let cors = require ('cors');
let {config}  = require('./config/index.js'); // no hace falta indicarle index.js, es por defecto.
let serverRoutes = require('./routes/routes.js');
var exphbs  = require('express-handlebars');

let app = express();
app.engine('hbs', // nombre de referencia de la plantilla, se usa luego en set
     exphbs({           // funcion de configuracion
      extname: '.hbs', // extension a utilizar por defecto en lugar de '.handlebars'
      defaultLayout: 'main', // aca se agregan todos los partials y el body
      layoutsDir: path.join(__dirname, "views/layouts") // ruta donde encuentro los layouts *nombre obligatorio
    } 
));
app.set('view engine', 'hbs');                  // template views engine
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