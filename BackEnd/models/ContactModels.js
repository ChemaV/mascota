import db from "../db.js"
import { DataTypes} from "sequelize"

const ContactModels=db.define("contact",{
    name:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    message:{type:DataTypes.STRING},
    tlf:{type:DataTypes.STRING},
})
export default ContactModels;

