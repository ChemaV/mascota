import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import Services from "../pages/Services"
import ServiceDetail from "../pages/ServiceDetail"
import serviceService from "../services/productService"
import productService from "../services/productService"
import '../index.css'
import Contact from "../pages/Contact"

const getProducts = async () => {
  const products = await productService.getProducts();
  return products;
}

const getProduct = async ({params}) => {
  const product = await productService.getProduct(params.id);
  return product
}

const getServices = async () => {
  const services = await serviceService.getServices();
  return services;
}

const getService = async ({params}) => {
  const service = await serviceService.getServices(params.id);
  return service
}


// const updateProduct = async ({ params, data }) => {
//   console.log(`Updating product with id ${params.id}`, data);
//   const updateProduct = await productService.updateProduct(params.id, data);
//   return product
// }

// const deleteProduct = async ({ params }) => {
//   console.log(`Deleting product with id ${params.id}`);
//   const deleteProduct = await productService.deleteProduct(params.id);
// }

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
          {
            path: "/home",
            element: <Home/>,
          },
          {
            path: "home/products",
            element: <Products/>,
            // loader: getProducts
          },
          {
            path: "home/productDetail/:id",
            element: <ProductDetail/>,
            //loader: getProduct
          },
          {
            path: "home/services",
            element: <Services/>,
            //loader: getServices
          },
          {
            path: "home/serviceDetail/:id",
            element: <ServiceDetail/>,
            //loader: getService
          },
          {
            path: "home/Contact",
            element: <Contact/>,
          }
            
        ]
    },
])