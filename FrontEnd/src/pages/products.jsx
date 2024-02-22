import { useEffect, useState } from 'react'
import ProductCard from "../components/ProductCard"
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
        
            <div>
                {products.map((product) => (
                <ProductCard product={product} key={product.id}/>
                ))}
            </div>
         
        </>
    )
    
}

export default Products


