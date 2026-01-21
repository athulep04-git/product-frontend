import React, { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { addProductAPI } from "../services/allAPIs";


function AddProduct() {
    const [productDetails, setProductDetails] = useState({
  name: "",
  price: "",
  category: "",
  description: ""
});


const handleAdd=async()=>{
const {name,price,category,description}=productDetails
if(!name||!price||!category||!description){
  alert("please fill details")
}
else{
  try{
    const response=await addProductAPI(productDetails)
  console.log(response);
  if(response.status===200){
    alert(response.data.message);
        navigate("/");
  } else {
        alert("Add failed");
      }

  }
  catch(err){
    alert("error",err)
  }
}
}


  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="w-full max-w-lg p-6 border rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">Add Product</h1>

        <div className="mb-4">
          <Label value="Product Name" />
          <TextInput type="text" placeholder="Enter product name" value={productDetails.name} onChange={(e)=>setProductDetails({...productDetails,name:e.target.value})}
           />
        </div>

      
        <div className="mb-4">
          <Label value="Price" />
          <TextInput type="number" placeholder="Enter price" value={productDetails.price} onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})} />
        </div>

        
        <div className="mb-4">
          <Label value="Category" />
          <TextInput type="text" placeholder="Enter category" value={productDetails.category} onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})}/>
        </div>

        <div className="mb-4">
          <Label value="Description" />
          <Textarea placeholder="Enter description" rows={4} value={productDetails.description} onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})} />
        </div>

      
        <div className="flex justify-center gap-4 mt-6">
          <Button className="!bg-green-600" onClick={handleAdd}>Add</Button>

          <Button color="gray" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
