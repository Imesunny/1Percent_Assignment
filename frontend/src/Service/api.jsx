import axios from 'axios';

const URL = "http://localhost:8080";

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${URL}/${id}`);
}

export const addUser=async(user)=>{
    try {
      const response= await axios.post(`${URL}/todo/add`, user);
      console.log(response);
    } catch (error) {
        console.log("Error while adding the users", error)
    }
}
