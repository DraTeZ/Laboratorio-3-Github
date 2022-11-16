import React from 'react'//comando rfc estructura de un compnente
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from 'react-bootstrap/Button';


const Inicio =()=> {
    //pantalla inicial
    return(
        <div className='container'>
            <div className='row'>
                <h1 className='mt-6'>Bienvenido al foro de recetas MacroFood!</h1>
                <img src='./components/comida' class="img-fluid" alt="..."></img>
            </div>
        </div>
        
    );
}

export default Inicio;