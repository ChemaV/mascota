import db from "../db.js"
import { DataTypes} from "sequelize"

const ServicesPubliserModels=db.define("servicespubliser",{
    name:{type:DataTypes.STRING},
    lastname:{type:DataTypes.STRING},
    tlf:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING},
    address:{type:DataTypes.STRING},
    servicetype:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    check_box:{type:DataTypes.TINYINT},
})
export default ServicesPubliserModels;

