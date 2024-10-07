"use client";

import Loading from "@/components/Loading";
export const ClientLoading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <Loading /> : children}
    </>
  );
};

