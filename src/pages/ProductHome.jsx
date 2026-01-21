import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { getProductAPI } from "../services/allAPIs";

function ProductHome() {
  const navigate = useNavigate();
  const [allproducts,setAllProducts]=useState([])
  const getproducts=async()=>{
    const response=await getProductAPI()
    console.log(response.data);
    setAllProducts(response.data.allproducts)
  }
  useEffect(()=>{
    getproducts();
  },[])

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product CRUD</h1>

        <Button className="!bg-blue-600" onClick={() => navigate("/add")}>
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {allproducts.length>0?
        allproducts.map((item)=>(
<Card key={item._id} className="shadow-md">
          <h5 className="text-xl font-bold tracking-tight text-gray-900">
            
            
            {item.name}
          </h5>

          <p className="text-gray-700">
            <span className="font-semibold">Price:</span> ₹ {item.price}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {item.category}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Description:</span> {item.description}
          </p>

          <div className="flex gap-3 mt-4">
            <Button   className="!bg-blue-600" onClick={() => navigate("/edit")} color="warning" size="sm">
              Edit
            </Button>

            <Button color="failure" size="sm">
              Delete
            </Button>
          </div>
        </Card>
        ))
          
        :
        <h1 className="justify-center item-center">no product</h1>
        }
      </div>
    </div>
  );
}

export default ProductHome;
