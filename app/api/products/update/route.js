// app/api/products/update/route.js
import { NextResponse } from 'next/server';
import dbPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PUT(request) {
  try {
    const db = await dbPromise;
    const productsToUpdate = await request.json(); // Expecting an array of products

    if (!Array.isArray(productsToUpdate) || productsToUpdate.length === 0) {
      return NextResponse.json({ success: false, error: "Invalid input data" }, { status: 400 });
    }

    // Update each product based on its `id`
    const updatePromises = productsToUpdate.map((product) => {
      const { _id, ...updateData } = product;

      // Convert `id` to ObjectId, using the recommended syntax
      const objectId = new ObjectId(_id); // Ensure `id` is in the correct format

      return db.collection("products").updateOne(
        { _id: objectId },
        { $set: updateData }
      );
    });

    const updateResults = await Promise.all(updatePromises);

    return NextResponse.json({ success: true, data: updateResults });
  } catch (error) {
    console.error("Failed to update products:", error);
    return NextResponse.json({ success: false, error: "Failed to update products" }, { status: 500 });
  }
}
