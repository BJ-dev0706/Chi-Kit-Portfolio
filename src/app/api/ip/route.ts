import { NextResponse } from 'next/server';
import connectDb from '@/lib/db'; // Import your database connection
import IpAddress from '@/models/IP'; // Import your IP address model

// Named export for POST method
export async function POST(request: Request) {
  await connectDb(); // Ensure database connection

  try {
    const { ip } = await request.json(); // Extract IP address from request body
    console.log(ip);
    
    // Save IP address to database
    const ipAddress = new IpAddress({ ip });
    await ipAddress.save();

    return NextResponse.json(ipAddress, { status: 201 });
  } catch (error) {
    console.error('Error saving IP address:', error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to save IP address' }, { status: 500 });
  }
}
