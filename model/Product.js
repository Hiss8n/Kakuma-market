
import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
image: String,
name: String,
price: Number,
description: String,
quantity:Number,

});


export default mongoose.models.Product || mongoose.model("Product", ProductSchema);