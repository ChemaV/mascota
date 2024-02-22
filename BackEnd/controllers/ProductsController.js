import ProductsModels from "../models/ProductsModels.js";
export const CreateProducts = async (req, res) => {
    const { name, Price, message, img, description, } = req.body;
    console.log('Datos recibidos:', { name, Price, message, img, description, });

    try {
        const Products = new ProductsModels({
            name,
            Price,
            message,
            img,
            description,
        });
        await Products.save();
        res.status(200).json({
            message: "Exito", Products
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error", error
        })
    }
}