import React from 'react'
import {useForm} from 'react-hook-form'
import {postData} from '../../src/services/productService'
import { useNavigate} from 'react-router-dom'

const Contact = () => {   //definimos el componente Create como una función
  const navigate = useNavigate()  // inicializamos Hooks: para la navegación y para usar el formulario.
  const { handleSubmit, register, errors} = useForm()

  const users = (data) =>{  // definimos la función users
    
  }
  return (
   
    <form onSubmit={handleSubmit(users)}>

        <label htmlFor="name">Name:</label>
        <input type='text' {...register("name", { required: true })} required/>
        <label htmlFor="email">Email:</label>
        <input id='email' type='email' {...register("email", { required: true })} required />
        <label htmlFor="message">Mensaje:</label>
        <textarea rows="6"  maxLength="300" {...register("comentario")} 
        required style={{resize: "none"}}/>    

        <button type='submit'>Enviar</button>
    </form>
);
}
export default Contact