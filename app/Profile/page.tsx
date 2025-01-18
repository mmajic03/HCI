import Link from "next/link";

export default function Profile() {
  return (
    <main className="flex min-h-[822px] w-screen flex-col items-center p-10 bg-[#9C8D71E8]">
      <div className="bg-[#EDE8DF] w-full max-w-md p-10 mt-[100px] rounded-lg shadow-md">
        <h1 className="text-center  text-[#537944] text-2xl font-bold mb-6">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="name"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9C8D71]"
              placeholder="Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9C8D71]"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Create password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9C8D71]"
              placeholder="Create password"
              required
            />
          </div>
          
          <button type="submit" className="w-full bg-[#70966D] text-white font-medium py-3 rounded-lg hover:bg-[#557046] transition">Sign Up</button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link href="/Profile/Login" className="text-[#678D58] font-medium hover:underline">Log In</Link>
        </p>
      </div>
    </main>
  );
}