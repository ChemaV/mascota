import ServicesPubliserModels from "../models/ServicesPubliserModels";
export const CreateServicesPubliser= async (req, res) => {
    const { name, lastname, email, password } = req.body;
    console.log('Datos recibidos:', { name, lastname, email, password });
  
   try { const CreateServicesPubliser = new ServicesPubliserModels ( {
      name,
      lastname,
      email,
      password,
    });
    await users.save();
    res.status(200).json({
        message:"Exito",CreateServicesPubliser
    })
    
   } catch (error) {
    console.log(error)
    res.status(500).json({
        message:"Error",error
   })
}
}
