import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import Services from "../pages/Services"
import ServiceDetail from "../pages/ServiceDetail"
import '../index.css'
import Contact from "../forms/Contact"


export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
          {
            path: "/",
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