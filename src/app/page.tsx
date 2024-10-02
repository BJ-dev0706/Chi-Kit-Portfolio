// src/app/page.tsx
// import Image from "next/image";
// import shape from "../assets/shape.png";

import React from 'react';

// Mark this component as a server component by default
const HomePage = async () => {
  // Fetch the IP address on the server
  const ip = await getClientIp();

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>Your IP address is: {ip}</p>
    </div>
  );
};

export default HomePage;

// Helper function to get the IP address server-side
async function getClientIp(): Promise<string> {
  // Fetch the request headers via the Next.js built-in `headers()` function
  const headers = new Headers();

  const forwardedFor = headers.get('x-forwarded-for') || 'Unknown IP';
  console.log(headers.get('x-forwarded-for'), headers);
  
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




// export default async function Home() {
//   // This fetches the IP address server-side
//   const ip = await fetchIp();
  
//   // If you want to get the client IP (if needed)
//   const clientIp = ''; // Logic to get client IP goes here if needed

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark">
//       <div className="w-4/5 flex flex-row items-center justify-center dark:text-white text-black">
//         <div className="flex-1">
//           <div className="text-center">
//             Welcome to Chi Kit&apos;s Portfolio. Your IP is: {clientIp || 'unknown'}
//           </div>
//         </div>
//         <div className="flex-1">
//           <Image src={shape} alt="shape" />
//         </div>
//       </div>
//     </div>
//   );
// }

