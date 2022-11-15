const PersonaCrl={}
const Persona = require("../models/Persona.models");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//funcion crear persona
PersonaCrl.crearPersona = async (req,res) => {
    
    //metodo crear persona
    const{name,email,password}=req.body 

    const NuevaPersona = new Persona({
        name,
        email,
        password,
    })

    const correoPersona =await Persona.findOne({email:email})

    if (correoPersona) {
        res.json({
            mensaje:'El correo ya existe'
        })
        
    }else{
        //encriptar la contraseña
        NuevaPersona.password=await bcrypt.hash(password,10)
        const token =jwt.sign({_id:NuevaPersona._id},"secreto")
        await NuevaPersona.save()

        res.json({
            mensaje:'Bienvenido',
            id:NuevaPersona.name,
            token
        })
    }
    
  };

  module.exports= PersonaCrl