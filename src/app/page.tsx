import Image from "next/image";
import shape from "../assets/shape.png";

import React from 'react';
import { headers } from "next/headers";

export default async function Home() {
  await getClientIp();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark">
      <div className="w-4/5 flex flex-row items-center justify-center dark:text-white text-black">
        <div className="flex-1">
          <div className="text-center">
            Welcome to Chi Kit&apos;s Portfolio.
          </div>
        </div>
        <div className="flex-1">
          <Image src={shape} alt="shape" />
        </div>
      </div>
    </div>
  );
}

async function getClientIp(): Promise<string> {
  const requestHeaders = headers();

  // Check for common headers used to store client IPs
  const forwardedFor = requestHeaders.get('x-forwarded-for');
  const realIp = requestHeaders.get('x-real-ip');
  const cfConnectingIp = requestHeaders.get('cf-connecting-ip');

  // Determine the best candidate for the client IP
  const ip = forwardedFor || realIp || cfConnectingIp || 'Unknown IP';
  
  // Send the IP address to the backend API for storage
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ip`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ip }),
  });

  return ip;
}







