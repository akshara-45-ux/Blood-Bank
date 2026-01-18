
import commonAPI from "./commonAPI";
import { BASE_URL } from "./serverURL";

export const addBloodAPI = async(reqBody) =>{
    return await commonAPI("POST", `${BASE_URL}/blood-data`,reqBody)
}
export const getAllBloodAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/blood-data`); 
}

export const deleteBloodAPI = async (id) => {
     return await commonAPI("DELETE",`${BASE_URL}/blood-data/${id}`); 
}

export const editBloodAPI = async (id) => {
     return await commonAPI("GET",`${BASE_URL}/blood-data/${id}`); 
}

export const updateBloodAPI = async (id, updatedData) => {
  return await commonAPI("PUT", `${BASE_URL}/blood-data/${id}`, updatedData);
};



export const statusAPI = async (id, updatedData) => {
  
  return await commonAPI("PATCH", `${BASE_URL}/blood-data/${id}`, updatedData);
//////////
}
export const getMyBloodRequestsAPI = async (userId) => {
  return await commonAPI(
    "GET",
    `${BASE_URL}/blood-data?userId=${userId}`
  );

};




// // /// /// /// /// /// /// sign up // /// // // // / // 


// Register user login

export const registerAPI = async(reqbody)=>{
    return await commonAPI("POST",`${BASE_URL}/users`,reqbody); 

}

// Check if email exists
export const emailCheckAPI = async (email) => {
    return await commonAPI("GET", `${BASE_URL}/users?email=${email}`, "");
};

// // /// /// ///// /// // //  login // /// /// /// // // 

// username and password

export const loginAPI = async (username, password) => {
  
    return await commonAPI("GET", `${BASE_URL}/users?username=${username}&password=${password}`, "");
};
 
