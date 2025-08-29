import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
name: String,
email: { type: String, unique: true },
password: String,
cartItems: [
{
productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
quantity: { type: Number, default: 1 },
},
],
});


export default mongoose.models.User || mongoose.model("User", UserSchema);