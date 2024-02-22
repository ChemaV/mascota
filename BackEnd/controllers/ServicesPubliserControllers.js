import UsersModels from "../models/ServicesPubliserModels.js";
export const CreateUsers= async (req, res) => {
    const { name, lastname, email, password } = req.body;
    console.log('Datos recibidos:', { name, lastname, email, password });
  
   try { const users = new UsersModels ( {
      name,
      lastname,
      email,
      password,
    });
    await users.save();
    res.status(200).json({
        message:"todo muy way ",users
    })
    
   } catch (error) {
    console.log(error)
    res.status(500).json({
        message:"todo mal ",error
   })
}
}
    // app.get('/api/users',(req,res)=>{
    //   try {
    //     const users=
    //   } catch (error) {
        
    //   }
    // })