import  express  from "express";
import { CreateUsers } from "../controllers/usersControllers.js";

const routes = express.Router()

routes.post("/api/register",CreateUsers)
export default routes;