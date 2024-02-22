import db from "../db.js";
import { DataTypes } from "sequelize";
import ServicesPubliserModels from "./ServicesPubliserModels.js";
import ProductsPubliserModels from "./ProductsPubliserModels.js";

const ServicesModels = db.define("services", {
    name:{type:DataTypes.STRING},
    price:{type:DataTypes.DECIMAL},
    servicetype:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING},
    idservicepubliser: {
        type: DataTypes.INTEGER,
        references: {
            model: ServicesPubliserModels, 
            key: "idservicepubliser", 
        },
    },
    idproductpubliser: {
        type: DataTypes.INTEGER,
        references: {
            model: ProductsPubliserModels, 
            key: "idproductpubliser", 
        },
    },
});

export default ServicesModels;
