import Image from "next/image";
import shape from "../assets/shape.png";
import pic from "../assets/1580110451615.png";
import React from "react";

import { headers } from "next/headers";

export default async function Home() {
  // await getClientIp();

  return (
    <div className="flex items-center justify-center bg-white dark:bg-dark bg-[url(../assets/hh-dots.gif)]">
      <div className="w-4/5 flex lg:flex-row flex-col items-center justify-center dark:text-white text-black max-lg:gap-24">
        <div className="flex-1">
          <div className="text-2xl font-tillana">
            <h1 className="text-5xl font-extrabold">Welcome!</h1>
            <p>I&apos;m excited to have you here!</p>
            <p>
              As a full-stack and blockchain developer, my mission is to help
              businesses like yours thrive in the digital landscape.
            </p>
            <p>
              Explore my portfolio to see how I can create custom solutions that
              meet your unique needs.
            </p>
            <p>Let&apos;s work together to achieve your goals!</p>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image src={shape} alt="shape" className="absolute left-10 top-1/2" />
          <Image src={pic} alt="img" className="" />
        </div>
      </div>
    </div>
  );
}

async function getClientIp(): Promise<string> {
  const requestHeaders = headers();

  // Check for common headers used to store client IPs
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  const realIp = requestHeaders.get("x-real-ip");
  const cfConnectingIp = requestHeaders.get("cf-connecting-ip");

  // Determine the best candidate for the client IP
  const ip = forwardedFor || realIp || cfConnectingIp || "Unknown IP";

  // Send the IP address to the backend API for storage
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ip`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ip }),
  });

  return ip;
}
