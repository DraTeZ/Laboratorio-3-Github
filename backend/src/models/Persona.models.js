const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//para q la bd lo guarde tiene q llamar etos mismos atributos igualitos en el controller

const PersonaSchema = new Schema({
  name:String,
  email:String,
  password:String,
  Description:{type:String,default:'lorem'}
});

module.exports  = mongoose.model("Persona", PersonaSchema);