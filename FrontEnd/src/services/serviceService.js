import axios from 'axios'

const API_URL = 'http://localhost:3000/services'

const serviceService = {
    async getServices(){
            try {        
                const response = await axios.get(API_URL); 
                return response.data;  
            }
            catch (error) {
                console.log(error);
            }    
          },
    
    async getService(id){
            
            try {        
                const response = await axios.get(`${API_URL}/${id}`); 
                return response.data;  
            }
            catch (error) {
                console.log(error);
            }  

    },
    async updateService(id, updatedProductData){
        try {        
            const response = await axios.put(`${API_URL}/${id}`, updatedProductData); 
            return response.data;  
        }
        catch (error) {
            console.log(error);
        }  
    },
    
    async deleteService(id){
        try {        
            const response = await axios.delete(`${API_URL}/${id}`); 
            return response.data;  
        }
        catch (error) {
            console.log(error);
        }  
    }
}

export default serviceService

