import ServicesModels from "../models/ServicesModels.js";
export const CreateServices = async (req, res) => {
    const { name, price, servicetype, description, } = req.body;
    console.log('Datos recibidos:', { name, price, servicetype, description, });

    try {
        const CreateServices = new ServicesModels({
            name,
            price,
            servicetype,
            description,
        });
        await Services.save();
        res.status(200).json({
            message: "Exito", CreateServices
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error", error
        })
    }
}