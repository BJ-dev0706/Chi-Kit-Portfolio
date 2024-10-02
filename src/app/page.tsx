import Image from "next/image";
import shape from "../assets/shape.png";

import React from 'react';

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
  const headers = new Headers();

  const forwardedFor = headers.get('x-forwarded-for') || 'Unknown IP';
  console.log(headers);
  
  // You can still send the IP to an API or database
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ip`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ip: forwardedFor }),
  });

  return forwardedFor;
}






