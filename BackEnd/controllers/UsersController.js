import UserModels from "../models/UsersModels.js";
export const CreateUsers= async (req, res) => {
    const { name, lastname, email, password, address, check_box } = req.body;
    console.log('Datos recibidos:', { name, lastname, email, password, address, check_box  });
  
   try { const Users = new UserModels  ( {
    name,
    lastname,
    password,
    address,
    email,
    check_box,

    });
    await UsersModels.save();
    res.status(200).json({
        message:"todo muy way ",Users 
    })
    
   } catch (error) {
    console.log(error)
    res.status(500).json({
        message:"todo mal ",error 
   })
}
}