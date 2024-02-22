import db from "../db.js";
import { DataTypes } from "sequelize";
import UsersModels from "./UsersModels.js";

const PurchaseModels = db.define("purchase", {
    idusers: {
        type: DataTypes.TINYINT,
        references: {
            model: UsersModels, 
            key: "idusers", 
        },
    },
});

export default PurchaseModels;
