import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex items-center justify-center relative min-h-screen bg-white">
      <h2 className="text-[25vw] absolute font-extrabold text-[#d0dad0]">404</h2>
      <div className="relative text-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">Oops! Page not found</p>
        <p className="text-lg text-gray-700 mb-8">Requested page doesn&apos;t exist.</p>
        <Link href="/" className="bg-[#70966D] hover:bg-[#425e40] text-white px-7 py-5 rounded-md shadow-sm">
          Go Home
        </Link>
      </div>
    </div>
  );
}