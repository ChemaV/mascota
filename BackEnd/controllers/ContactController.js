import ContactModels from "../models/ContactModels.js";

export const CreateContact = async (req, res) => {
    const { name, email, message, tlf } = req.body;
    console.log('Datos recibidos:', { name, email, message, tlf });

    try {
        const Contact = new ContactModels({
            name,
            email,
            message,
            tlf,
        });
        
        await Contact.save();
        
        res.status(200).json({
            message: "todo muy way",
            Contact
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "todo mal",
            error
        });
    }
};
