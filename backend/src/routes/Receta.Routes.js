const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecetaSchema = new Schema({
    title :String,
    score :String,
    cooking_time :String,
    difficulty_level:String,
    source:String,
});





module.exports =   mongoose.model("Receta", RecetaSchema);