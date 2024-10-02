"use client";

import Loading from "@/components/Loading"; // Import your Loading component
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use NavigateOptions type

type NavigateOptions = {
  shallow?: boolean;
  scroll?: boolean;
};

export const ClientLoading = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Properly typed handleRouteChange
  const handleRouteChange = (
    action: (url: string, options?: NavigateOptions) => void, 
    url: string, 
    options?: NavigateOptions
  ) => {
    setLoading(true);
    action(url, options); // Perform the navigation synchronously
    setLoading(false);
  };

  useEffect(() => {
    console.log("Router is mounted:", router); // Debugging log

    // Save the original push and replace functions
    const originalPush = router.push;
    const originalReplace = router.replace;

    // Override the push and replace methods
    router.push = (url: string, options?: NavigateOptions) => handleRouteChange(originalPush, url, options);
    router.replace = (url: string, options?: NavigateOptions) => handleRouteChange(originalReplace, url, options);

    // Cleanup function on unmount
    return () => {
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
};

