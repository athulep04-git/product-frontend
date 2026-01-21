import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";


export const addProductAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/addproduct`, reqBody, {});
}
export const getProductAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/getproduct`,{},{})
}

export const deleteProductAPI=async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/api/deleteproduct/${id}`,{},{})
}

export const getoneproductAPI=async(id)=>{
  return await commonAPI('GET',`${serverURL}/api/getoneproduct/${id}`,{},{})
}