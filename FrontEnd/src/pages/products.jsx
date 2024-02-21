import { useEffect, useState } from 'react'
import Product from "../components/ProductCard"
import productService from '../services/productService'


const Products = () => {

    const [products, setProducts] = useState([]);

const getProducts = async() => {
              const products = await productService.getProducts()
              setProducts(products)
         };

useEffect(() => {
    getProducts()
},[]);

    return (
       <>
        
            <ul>
                {projects.map((project) => (
                <Product product={product} key={product.id}/>
                ))}
            </ul>
         
        </>
    )
    
}

export default Products


