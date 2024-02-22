import db from "../db.js"
import { DataTypes} from "sequelize"

const UsersModels=db.define("users",{
    name:{type:DataTypes.STRING},
    lastname:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    address:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    check_box:{type:DataTypes.TINYINT},
})
export default UsersModels;

