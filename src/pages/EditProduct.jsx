import React, { useEffect, useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { getoneproductAPI, updateProductAPI } from "../services/allAPIs";

function EditProduct() {
  const navigate = useNavigate();
  const {id}=useParams()
   const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const getProductDetails=async()=>{
    const response=await getoneproductAPI(id)
    setProductDetails(response.data.oneproduct);
  }
  const updateProductDetails=async()=>{
    const response=await updateProductAPI(id,productDetails)
    console.log(response);
  }

  useEffect(()=>{
    getProductDetails();
  },[])
  

  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="w-full max-w-lg p-6 border rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">Edit Product</h1>

        <div className="mb-4">
          <Label value="Product Name" />
          <TextInput
            type="text"
            value={productDetails.name}
            onChange={(e)=>setProductDetails({...productDetails,name:e.target.value})}
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <Label value="Price" />
          <TextInput
            type="number"
            value={productDetails.price}
            onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})}
            placeholder="Enter price"
          />
        </div>

        <div className="mb-4">
          <Label value="Category" />
          <TextInput
            type="text"
            value={productDetails.category}
            onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})}
            placeholder="Enter category"
          />
        </div>

        <div className="mb-4">
          <Label value="Description" />
          <Textarea
          value={productDetails.description}
            onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})}
            placeholder="Enter description"
            rows={4}
          />
        </div>

      
        <div className="flex justify-center gap-4 mt-6">
          <Button className="!bg-blue-600" onClick={updateProductDetails}>Update</Button>

          <Button color="gray" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
