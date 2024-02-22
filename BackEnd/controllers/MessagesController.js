import MessagesModels from "../models/MessagesModels.js";
export const CreateMessages= async (req, res) => {
    const { message, } = req.body;
    console.log('Datos recibidos:', { message, });
  
   try { const Messages = new MessagesModels ( {
      message,
    });
    await Messages.save();
    res.status(200).json({
        message:"todo muy way ",Messages 
    })
    
   } catch (error) {
    console.log(error)
    res.status(500).json({
        message:"todo mal ",error 
   })
}
}
