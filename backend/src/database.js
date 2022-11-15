const mongoose = require("mongoose");
//credenciales
const user ='anders';
const password ='159632a';
const dbname ='veterinaria';
const URI =`mongodb+srv://anders:${password}@cluster0.vre5bcs.mongodb.net/test`
//db_conect
mongoose
  .connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then(db => console.log("💻 Mondodb Connected",db.connection.name))
  .catch(err => console.error(err));

  //mod_exp
  module.exports = mongoose;