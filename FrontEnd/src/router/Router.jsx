import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import Services from "../pages/Services"
import ServiceDetail from "../pages/ServiceDetail"
import productService from "../services/productService"
import '../index.css'

const getProducts = async () => {
  const products = await productService.getProducts();
  return products;
}

const getProduct = async ({params}) => {
  console.log(params.id)
  const product = await productService.getProduct(params.id);
  return product
}

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
          {
            path: "/home/",
            element: <Home/>,
          },
          {
            path: "home/products",
            element: <Products/>,
            loader: getProjects
          },
          {
            path: "home/productDetail/:id",
            element: <ProductDetail/>,
            loader: getProject
          },
          {
            path: "home/services",
            element: <Services/>,
            loader: getProjects
          },
          {
            path: "home/servicesDetail/:id",
            element: <ServiceDetail/>,
            loader: getProjects
          },
        ]
    },
])