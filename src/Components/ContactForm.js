import React from "react";
import { useState } from "react";
import "../Components/Form.css";
import Swal from 'sweetalert2'

const Form = () =>{
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const handleNameChange = (e) =>{
        e.preventDefault();
        setNombre(e.target.value)
      } 
    const handleCorreoChange = (e) =>{
        e.preventDefault();
        setCorreo(e.target.value)
      } 

    return(
        <>
            <form className="form2" onSubmit={(e) => {
              e.preventDefault();

              const nombre = e.target.nombre.value;
              const email = e.target.correo.value;
              const texto = e.target.texto.value;

              MostrarDatos(nombre,email,texto);
            }}>
            <h1>Formulario de Contacto</h1>
                <label className="label" htmlFor="nombre">Nombre: </label>
                <input className="input" type='text'
                name="nombre"
                value={nombre}
                onChange={(e)=>handleNameChange(e)}
                placeholder="Su nombre..."></input> 
                <label className="label" htmlFor="correo">Email: </label>
                <input className="input" type='email'
                name="correo"
                value={correo}
                onChange={(e)=>handleCorreoChange(e)}
                placeholder="Su correo..."></input> 
                <label className="label" htmlFor="texto">Escriba su mensaje:</label>
                <textarea name="texto" placeholder="Escriba aqui..."></textarea> 
                <button type="submit" className="button">Enviar</button>
            </form>
        </>
    )
}
  const MostrarDatos = (nombre,email,texto)=>{
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado'
    }); 
    console.log('Nombre: '+ nombre,'Correo: '+ email,'Mensaje: '+texto)
  }

export default Form