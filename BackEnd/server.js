import express from 'express';
import cors from 'cors';
import db from './db.js';
import UsersRoutes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar el middleware CORS
app.use(cors());
app.use(express.json());
app.use("/",UsersRoutes)




try {
  await db.authenticate()
  console.log("esta conectado")
  
} catch (error) {
  console.log(error)
  
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
