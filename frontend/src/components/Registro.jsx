import React from 'react'//comando rfc estructura de un comopnente
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from 'react-bootstrap/Button';


const Registro =()=> {
  //metodo de registrar ciudad
  
  const [name,setName]=useState(' ')
  const [email,setemail]=useState(' ')
  const [password,setpassword]=useState(' ')

  const registro = async (e) => {
    e.preventDefault();
    const usuario={name,email,password}
    //la respesta es una peticion
    console.log(usuario.name)
    axios.defaults.baseURL='http://localhost:4000'
    const respuesta=await axios.post("./persona/crearPersona",usuario)
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje
    if (mensaje!=='Bienvenido') {
      
      Swal.fire({
        icon:'error',
        title:mensaje,
        showConfirmButton:false,
        timer:1500

      })
    }else{
      //caputar los q estan en res del controller
      const token =respuesta.data.token
      const name =respuesta.data.name
      const idUsuario =respuesta.data.id
      //todo lo ant se captura en 
      sessionStorage.setItem('token',token)
      sessionStorage.setItem('token',name)
      sessionStorage.setItem('token',idUsuario)

      Swal.fire({
        icon:'success',
        title:"Ciudad creada correctamente",
        showConfirmButton:false,
        timer:1500

      })

      setTimeout(() => {
        window.location.href='./index'
      }, 1600);

      
    }
      //onChange={(e)=>setemail(e.target.value) sirve para captuarr datos del
      
    };
    return (
      <Form className='container' onSubmit={registro}>
        <Form.Group className="mb-3" controlId="formGroupNAme"    >
          <Form.Label>name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    );
}

export default Registro;