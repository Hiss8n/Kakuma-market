import cloudinary from "@/app/cloudinary/route";
import connectDb from "@/lib/db";

import Product from "@/model/Product";

export async function POST(req) {
  try {
    await connectDb()

    const body = await req.json();
    const { name, price, description, image } = body;

    if (!name || !price || !description || !image) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields required" }),
        { status: 400 }
      );
    }
     let cloudinaryRes=null
    if(image){
        cloudinaryRes= await cloudinary.uploader.upload(image ,{ folder:`products`});
       


    }

    const product = await Product.create({
      name,
      price,
      description,
      image:cloudinaryRes?.secure_url?cloudinaryRes.secure_url:''
    });

    return new Response(JSON.stringify({ success: true, product }), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}



export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({});
    return new Response(JSON.stringify({ success: true, products }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
