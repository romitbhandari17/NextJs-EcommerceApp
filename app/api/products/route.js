// app/api/products/route.js
import { NextResponse } from 'next/server';
import dbPromise from '@/app/lib/mongodb';

export async function getAllKurtis() {
  try {
    const db = await dbPromise;
    let productsKurtisets = await db.collection("products").find({category: 'kurti-sets'}).toArray();
    let products = await db.collection("products").find({}).toArray();
    let kurtiSets = {};
    for(let item of products){
      if(item.title in kurtiSets){

        if(!kurtiSets[item.title].color.includes(item.color) && item.availableQty > 0){
          kurtiSets[item.title].color.push(item.color);
        }

        if(!kurtiSets[item.title].size.includes(item.size) && item.availableQty > 0){
          kurtiSets[item.title].size.push(item.size);
        }

      }else{
        kurtiSets[item.title] = JSON.parse(JSON.stringify(item));
        kurtiSets[item.title].color = [item.color];
        kurtiSets[item.title].size = [item.size];
      }
    }
    return NextResponse.json({ success: true, data: kurtiSets });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 });
  }
}


export async function GET(request) {
  try {
    const db = await dbPromise;
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    let product = await db.collection("products").findOne({slug:slug});
    let products=[];
    if(product != null){
      let title = product.title;
      products = await db.collection("products").find({title}).toArray();
    }else if( slug == 'all'){
      products = await db.collection("products").find({}).toArray();
    }
    else{
      console.log('No Product found')
      return NextResponse.json({ success: true, data: 'No Product found' });
    }
    console.log('products exist=',products)
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 });
  }
}