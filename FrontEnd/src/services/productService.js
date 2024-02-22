import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3000/products'

const productService = {
    async getProducts(){
            try {        
                const response = await axios.get(API_URL); 
                return response.data;  
            }
            catch (error) {
                console.log(error);
            }    
          },
    
    async getProduct(id){
            
            try {        
                const response = await axios.get(`${API_URL}/${id}`); 
                return response.data;  
            }
            catch (error) {
                console.log(error);
            }  

    },
    async updateProduct(id, updatedProductData){
        try {        
            const response = await axios.put(`${API_URL}/${id}`, updatedProductData); 
            return response.data;  
        }
        catch (error) {
            console.log(error);
        }  
    },
    
    async deleteProduct(id){
        try {        
            const response = await axios.delete(`${API_URL}/${id}`); 
            return response.data;  
        }
        catch (error) {
            console.log(error);
        }  
    }
}

const postData = async (data) => {
    const navigate = useNavigate(); // Usar hook useNavigate para obtener la función de navegación

    try {
        await axios.post('http://localhost:3000/usuarios', data);
        alert("Mensaje enviado exitosamente");
        navigate('/'); // Navegar de vuelta a la página de inicio
    } catch (error) {
        console.error('Error al enviar datos:', error);
        // Manejar el error según sea necesario
    }
};

export default productService

