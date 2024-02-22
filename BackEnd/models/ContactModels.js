import db from "../db.js";
import { DataTypes } from "sequelize";

const ContactModels = db.define("contacts", {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    message: { type: DataTypes.STRING },
    tlf: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

export default ContactModels;