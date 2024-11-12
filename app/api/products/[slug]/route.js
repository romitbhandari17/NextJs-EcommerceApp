// app/api/products/route.js
import { NextResponse } from 'next/server';
import dbPromise from '@/app/lib/mongodb';

export async function GET(request, { params } ){
  try {
    const db = await dbPromise;
   
    const { slug } = params; // Extract the slug from the URL

    // Find the product by slug
    let product = await db.collection("products").findOne({slug});
    //console.log('product=', product);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 });
  }
}