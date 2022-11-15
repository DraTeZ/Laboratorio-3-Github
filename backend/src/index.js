//requerimientos
const express = require("express");
const morgan = require("morgan");
const app =express()
const cors = require('cors');
const bodyParser = require("body-parser");
require('./database')
//configuracion del puerto
app.set('Port',process.env.PORT||4000); //escuche el puerto q esta activo si no  escucha algun puerto q escuche el 4000
app.use(morgan('dev')) //"dev": "nodemon src/index.js" poner esto en index para correr el seridor referenciando este file
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));
//llamamos la api
app.use('/persona',require('./routes/Persona.routes'))

app.listen(app.get("Port"), () => {
  console.log('servidor esta escuchando por el puerto app',app.get('Port'))
});