import Product from "@/model/Product";
import { NextResponse } from "next/server";
import connectDb from "@/lib/db";



export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectDb();

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
