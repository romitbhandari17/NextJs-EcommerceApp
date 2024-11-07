// app/api/products/add/route.js
import { NextResponse } from 'next/server';
import dbPromise from '@/app/lib/mongodb';

export async function POST(request) {
  try {
    const db = await dbPromise;
    const productsToAdd = await request.json(); // Expecting an array of products

    if (!Array.isArray(productsToAdd) || productsToAdd.length === 0) {
      return NextResponse.json({ success: false, error: "Invalid input data" }, { status: 400 });
    }

    // Insert multiple products
    const result = await db.collection("products").insertMany(productsToAdd);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Failed to add products:", error);
    return NextResponse.json({ success: false, error: "Failed to add products" }, { status: 500 });
  }
}

