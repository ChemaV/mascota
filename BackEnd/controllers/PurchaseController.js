import PurchaseModels from "../models/PurchaseModels.js";
export const CreatePurchase= async (req, res) => {
    const {  } = req.body;
    console.log('Datos recibidos:', {  });
  
   try { const Purchase = new PurchaseModels ( {
    
    });
    await PurchaseModels.save();
    res.status(200).json({
        message:"todo muy way ",Purchase 
    })
    
   } catch (error) {
    console.log(error)
    res.status(500).json({
        message:"todo mal ",error 
   })
}
}