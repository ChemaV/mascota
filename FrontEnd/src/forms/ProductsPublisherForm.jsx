import React from 'react'
import {useForm} from  'react-hook-form'
import { postData } from '../services/productService'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

const Create = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, errors} = useForm()

    
  const products = (data) =>{
      data.image = image;
      postData(data)
      
      navigate('/')

    }
      return (
    <form  onSubmit={handleSubmit(products)}>
      <label htmlFor="name">Nombre del producto:</label>
      <input type='text' {...register("name", { required: true })} required/>
      <label htmlFor="price">Precio:</label>
      <input id='price' type='number' {...register("price", { required: true })} required />
      <label htmlFor="description">Descripción:</label>
      <input name="description" id="description" {...register("description")} required/>
      <label htmlFor="image">Imagen Producto</label>
      <input type="file" /* onChange={(e) => uploadImage(e)} */  {...register("image")} />
      <button type='submit'>Enviar</button>
    </form>
      )
    }  
   

export default Create