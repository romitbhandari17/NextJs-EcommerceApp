import { NextResponse } from 'next/server';

export async function GET(request) {
    console.log("pincode api called");

    try {
        //const jsonData = JSON.parse(); // Parsing the file content to a JSON object
        
        return NextResponse.json([560102, 452018, 560035,  560087]);
    } catch (error) {
        console.error('Error parsing JSON:', error);

        // Returning an error as a JSON object
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 404 });
    }
}