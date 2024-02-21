import axios from 'axios'

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

export default productService

