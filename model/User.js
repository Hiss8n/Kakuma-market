import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
name:String ,
email: String,
password: String ,
role:{type:String,enum:["admin","user"] ,default:'user'},
cart: [
{
productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },

quantity: { type: Number, default: 1 },
},
],
});


export default mongoose.models.User || mongoose.model("User", UserSchema);