import ProductsPubliserModels from "../models/ProductsPubliserModels.js";
export const CreateProductsPubliser = async (req, res) => {
    const { name, company, email, tlf, address, description, password, check_box, } = req.body;
    console.log('Datos recibidos:', { name, company, email, tlf, address, description, password, check_box, });

    try {
        const CreateProductsPubliser = new ProductsPubliserModels({
            name,
            company,
            email,
            tlf,
            address,
            description,
            password,
            check_box,
        });
        await ProductsPubliser.save();
        res.status(200).json({
            message: "Exito", CreateProductsPubliser
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error", error
        })
    }
}