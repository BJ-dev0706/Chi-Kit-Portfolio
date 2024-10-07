// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="dark:bg-dark bg-white min-h-screen h-screen flex flex-col items-center justify-center gap-10 bg-[url(../assets/404.png)] bg-center bg-contain bg-no-repeat">
      <h1 className="font-tillana font-extrabold text-4xl dark:text-white text-black">
        404 - Page Not Found 
      </h1>
      <p className="text-2xl">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        <span>Go back home</span>
      </Link>
    </div>
  );
}
