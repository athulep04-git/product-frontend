import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";


export const addProductAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/addproduct`, reqBody, {});
};
export const getProductAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/getproduct`,{},{})
}