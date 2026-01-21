import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

// Add product
export const addProductAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/addproduct`, reqBody, {});
}
// Get all products
export const getProductAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/getproduct`,{},{})
}
// Delete product
export const deleteProductAPI=async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/api/deleteproduct/${id}`,{},{})
}

// Get single product
export const getoneproductAPI=async(id)=>{
  return await commonAPI('GET',`${serverURL}/api/getoneproduct/${id}`,{},{})
}
// Update product
export const updateProductAPI=async(id,reqBody)=>{
  return await commonAPI('PUT',`${serverURL}/api/updateproduct/${id}`,reqBody,{})
}