export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#70966D] border-opacity-70 mb-6" />
      <p className="text-lg font-medium">Loading...</p>
    </div>
  );
}