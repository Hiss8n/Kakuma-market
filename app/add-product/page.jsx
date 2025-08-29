'use client'
import { useState } from "react";
import axios from "axios";


export default function AddProduct() {
const [form, setForm] = useState({ name: "", price: "", description: "" });
const [image, setImage] = useState(null);


const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


const handleImageUpload = async (e) => {

   const file= setImage(e.target.file[0])
const { data } = await axios.get("/api/cloudinary");
const formData = new FormData();
/* const file = e.target.files[0]; */
formData.append("file", file);
formData.append("api_key", data.apiKey);
formData.append("timestamp", data.timestamp);
formData.append("signature", data.signature);
formData.append("upload_preset", "ml_default");


const uploadRes = await axios.post(
`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/cloudinary`,
formData
);
setImage(uploadRes.data.secure_url);
}; 



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await handleImageUpload();

      const res = await fetch("http://localhost/:3000/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Product Added!");
        setForm({ name: "", price: "", description: "", image: "" });
      } else {
        alert("❌ Failed: " + data.message);
      }
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };



return (
    <div className="h-full flex items-center justify-center">

 
<div className="p-4 bg-slate-50 border-1 border-amber-200 rounded-sm w-[350px] h-[460px] ">
<h1 className="py-3 text-center text-2xl">Add Product</h1>
<input name="name" onChange={handleChange} placeholder="Name" className="py-2 border-1 border-amber-50" />
<input name="price" onChange={handleChange} placeholder="Price" className="py-2 border-1 border-amber-50" />
<textarea name="description" onChange={handleChange} placeholder="Description"  className="py-2 border-1 border-amber-50"/>
<input type="file" onChange={handleImageUpload}  className="py-2 border-1 border-amber-50"/>
{image && <img src={image} alt="preview" width={100} />}
<button onClick={handleSubmit} className="py-2 px-6 bg-gradient-to-tr from-red-300 to-amber-100 round-md transition-all opacity-100 hover:opacity-200">Add Product</button>
</div>
   </div>
);
}