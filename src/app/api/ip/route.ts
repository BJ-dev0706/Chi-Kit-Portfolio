import { NextResponse } from 'next/server';
import connectDb from '@/lib/db'; // Import your database connection
import IpAddress from '@/models/IP'; // Import your IP address model

// Named export for POST method
export async function POST(request: Request) {
  await connectDb(); // Ensure database connection

  try {
    const { ip } = await request.json(); // Extract IP address from request body
    console.log(ip);

    // Check if the IP address already exists in the database
    const existingIp = await IpAddress.findOne({ ip });
    if (existingIp) {
      return NextResponse.json({ message: 'IP address already exists' }, { status: 409 }); // 409 Conflict
    }

    // Save IP address to database if it doesn't exist
    const ipAddress = new IpAddress({ ip });
    await ipAddress.save();

    return NextResponse.json(ipAddress, { status: 201 });
  } catch (error) {
    console.error('Error saving IP address:', error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to save IP address' }, { status: 500 });
  }
}
