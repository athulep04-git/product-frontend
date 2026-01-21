import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="w-full max-w-lg p-6 border rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">Edit Product</h1>

        <div className="mb-4">
          <Label value="Product Name" />
          <TextInput
            type="text"
            placeholder="Enter product name"
            defaultValue="Laptop Pro"
          />
        </div>

        <div className="mb-4">
          <Label value="Price" />
          <TextInput
            type="number"
            placeholder="Enter price"
            defaultValue="55000"
          />
        </div>

        <div className="mb-4">
          <Label value="Category" />
          <TextInput
            type="text"
            placeholder="Enter category"
            defaultValue="Electronics"
          />
        </div>

        <div className="mb-4">
          <Label value="Description" />
          <Textarea
            placeholder="Enter description"
            rows={4}
            defaultValue="16GB RAM, i5 Processor, 512GB SSD"
          />
        </div>

      
        <div className="flex justify-center gap-4 mt-6">
          <Button className="!bg-blue-600">Update</Button>

          <Button color="gray" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
