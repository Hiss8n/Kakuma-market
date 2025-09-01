
import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import User from "@/model/User";


export async function GET() {
  try {
   
    await connectDb();

    // Fetch all products
    const user = await User.find({})
    

    
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
