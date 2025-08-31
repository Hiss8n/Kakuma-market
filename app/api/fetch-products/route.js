import Product from "@/model/Product";
import { NextResponse } from "next/server";
import connectDb from "@/lib/db";


export async function GET() {
  try {
   
    await connectDb();

    // Fetch all products
    const products = await Product.find({})
    console.log("here:")

    
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
