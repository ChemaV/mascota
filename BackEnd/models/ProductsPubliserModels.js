import db from "../db.js"
import { DataTypes} from "sequelize"

const ProductsPubliserModels=db.define("productspubliser",{
    name:{type:DataTypes.STRING},
    company:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    tlf:{type:DataTypes.STRING},
    address:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING},
    check_box:{type:DataTypes.TINYINT}, 
})
export default ProductsPubliserModels;