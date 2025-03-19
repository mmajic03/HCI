"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import supabase, { uploadImage, getPublicImageUrl, saveImageUrlToDatabase } from "@/src/supabase/supabaseClient";

export default function SignUp() {
  const router = useRouter();

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
    profilePicture: File | null;
  }>({
    name: "",
    email: "",
    password: "",
    profilePicture: null,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "file") {
      const file = e.target.files?.[0] || null;
      setFormData({ ...formData, profilePicture: file });
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      profilePicture: null,
    });
    setImagePreview(null);
    
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { name, email, password, profilePicture } = formData;

    const { data: user, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    const userId = user.user?.id;

  
    const { error: dbError } = await supabase.from("users").insert([
      { 
        id: userId, 
        name, 
        email, 
        password, 
        email_verified: false 
      },
    ]);

    if (dbError) {
      setError("Failed to save user info: " + dbError.message);
      setLoading(false);
      return;
    }

    
    if (profilePicture && userId) {
      try {
        const imagePath = await uploadImage(profilePicture);
        if (imagePath) {
          const publicUrl = getPublicImageUrl(imagePath);
          await saveImageUrlToDatabase(userId, publicUrl);
        }
      } catch (uploadError) {
        setError("Failed to upload profile picture");
        setLoading(false);
        return;
      }
    }

    resetForm();
    setLoading(false);
    router.push("/Profile");
  };

  return (
    <main className="flex min-h-[822px] w-screen flex-col items-center p-10 bg-[#9C8D71E8]">
      <div className="bg-[#EDE8DF] w-full max-w-md p-10 mt-[100px] rounded-lg shadow-md">
        <h1 className="text-center text-[#537944] text-2xl font-bold mb-6">Sign Up</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
         
         

         
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9C8D71]"
              placeholder="Name"
              required
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9C8D71]"
              placeholder="Email"
              required
            />
          </div>

        
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Create password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9C8D71]"
              placeholder="Create password"
              required
            />
          </div>

          <div className="mb-4 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-2 flex items-center justify-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">No image</span>
              )}
            </div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-1">
              Profile Picture (optional)
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9C8D71]"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-[#70966D] text-white font-medium py-3 rounded-lg hover:bg-[#557046] transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/Profile/Login" className="text-[#678D58] font-medium hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}