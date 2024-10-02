import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <h1 className="text-2xl text-gray-900 dark:text-white">Allibaba&apos;s Portfolio</h1>
      <ThemeToggle />
    </div>
  );
}
