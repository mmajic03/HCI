"use client";
import { useState } from "react";
import { Navigation } from "../_components/navigation";
import Image from "next/image";
import ShoppingList from "../_components/ShoppingList";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="h-[820px] bg-[#A48F73] flex">
      <main className="w-full bg-[#EDE8DF] p-8 rounded-none shadow-lg flex">
        <aside className="w-1/6 border-r border-gray-400 pr-4 text-xl mt-2 ">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </aside>

        <section className="w-3/4 pl-8">
          {activeTab === "profile" && (
            <>
              <div className="flex items-center space-x-4 mb-8 mt-4">
                <Image
                  alt="Profile"
                  src="/image.jpg"
                  className="w-32 h-32 rounded-full object-cover border-2 border-gray-400"  
                  width={96}
                  height={96}
                />

                <div>
                  <h2 className="text-2xl text-gray-800 border-gray-400 pb-1">Emily Brown</h2>
                  <button
                    className="mt-2 px-4 py-1.5 bg-[#70966D] text-black rounded-lg shadow hover:bg-[#467242] focus:outline-none focus:ring-2 focus:ring-[#70966D] text-sm"
                  >
                    Change photo
                  </button>
                </div>
              </div>

              <form className="space-y-6 mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-800 font-medium mb-2">First name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full border border-gray-400 rounded-lg px-4 py-2 bg-[#f8f4ed] focus:outline-none focus:ring-2 focus:ring-[#70966D] mt-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-gray-800 font-medium mb-2">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full border border-gray-400 rounded-lg px-4 py-2 bg-[#f8f4ed] focus:outline-none focus:ring-2 focus:ring-[#70966D] mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="username" className="block text-gray-800 font-medium mb-2">Username</label>
                    <input
                      type="text"
                      id="username"
                      className="w-full border border-gray-400 rounded-lg px-4 py-2 bg-[#f8f4ed] focus:outline-none focus:ring-2 focus:ring-[#70966D] mt-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-400 rounded-lg px-4 py-2 bg-[#f8f4ed] focus:outline-none focus:ring-2 focus:ring-[#70966D] mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-gray-800 font-medium mb-2">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="w-full border border-gray-400 rounded-lg px-4 py-2 bg-[#f8f4ed] focus:outline-none focus:ring-2 focus:ring-[#70966D] mt-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-gray-800 font-medium mb-2">Confirm password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="w-full border border-gray-400 rounded-lg px-4 py-2 bg-[#f8f4ed] focus:outline-none focus:ring-2 focus:ring-[#70966D] mt-2"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 px-3 py-2 bg-[#70966D] text-black rounded-lg shadow hover:bg-[#467242] focus:outline-none focus:ring-2 focus:ring-[#70966D]"
                >
                  Save Changes
                </button>
              </form>
            </>
          )}

          {activeTab === "savedRecipes" && (
            <div>
              <h2 className="text-2xl text-gray-800 mb-4">Saved recipes</h2>
            </div>
          )}

          {activeTab === "shoppingList" && (
            <div>
              <ShoppingList />
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
