import Link from "next/link";
export default function Login() {
    return (
      <main className="flex min-h-[822px] w-screen flex-col items-center p-10 bg-[#9C8D71E8]">
        <div className="bg-[#EDE8DF] w-full max-w-md p-10 mt-[100px] rounded-lg shadow-md">
          <h1 className="text-center text-[#537944] text-2xl font-bold mb-6">Log In</h1>
          <form>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9C8D71]"
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="w-full bg-[#70966D] text-white font-medium py-3 rounded-lg hover:bg-[#557046] transition">Log In</button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{' '}
            <Link href="/Profile/Signup" className="text-[#678D58] font-medium hover:underline">Sign Up</Link>
          </p>
        </div>
      </main>
    );
  }
  