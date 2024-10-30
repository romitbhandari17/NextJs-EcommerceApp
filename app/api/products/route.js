// app/api/products/route.js
import { NextResponse } from 'next/server';
import dbPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await dbPromise;
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 });
  }
}