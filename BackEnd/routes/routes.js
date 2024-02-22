import  express  from "express";
import { CreateUsers } from "../controllers/UsersController.js";
import { CreateContact } from "../controllers/ContactController.js";
import { CreateMessages } from "../controllers/MessagesController.js";
import { CreateProducts } from "../controllers/ProductsController.js";
import { CreateProductsPubliser } from "../controllers/ProductsPubliserController.js";
import { CreateServices } from "../controllers/ServicesController.js";
import { CreatePurchase } from "../controllers/PurchaseController.js";

const routes = express.Router()

routes.post("/api/register", CreateUsers);
routes.post("/api/create-contact", CreateContact);
routes.post("/api/create-messages", CreateMessages);
routes.post("/api/create-products", CreateProducts);
routes.post("/api/create-products-publisher", CreateProductsPubliser);
routes.post("/api/create-services-publisher", CreateProductsPubliser);
routes.post("/api/create-services", CreateServices);
routes.post("/api/purchase", CreatePurchase);

export default routes;