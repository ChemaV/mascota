import db from "../db.js";
import { DataTypes } from "sequelize";
import ContactModels from "./ContactModels.js";
import ServicesPubliserModels from "./ServicesPubliserModels.js";
import ProductsPubliserModels from "./ProductsPubliserModels.js";

const MessagesModels = db.define("messages", {
    message:{type:DataTypes.STRING},
    idcontact: {
        type: DataTypes.INTEGER,
        references: {
            model: ContactModels, 
            key: "idcontact", 
        },
    },
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

export default MessagesModels;
