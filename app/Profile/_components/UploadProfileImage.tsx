// "use client";

// import { useState } from "react";
// import { supabase } from "@/src/supabase/storage";
// import Image from "next/image";

// export default function UploadProfileImage() {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [uploading, setUploading] = useState(false);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedImage(file);
//       setPreviewUrl(URL.createObjectURL(file)); // generira privremeni URL za prikaz slike
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedImage) {
//       alert("Please select an image to upload.");
//       return;
//     }
  
//     try {
//       setUploading(true);
  
//       const fileName = `profileImages/${selectedImage.name}`;
//       console.log("Bucket:", "user-images");
//       console.log("Path:", fileName);
//       console.log("Selected Image:", selectedImage);
  
//       const { error } = await supabase.storage
//         .from("user-images")
//         .upload(fileName, selectedImage);
  
//       if (error) {
//         console.error("Error uploading image:", error.message);
//         alert("Failed to upload image.");
//         return;
//       }
  
//       alert("Image uploaded successfully!");
//     } catch (error) {
//       console.error("Error during upload:", error);
//       alert("An unexpected error occurred.");
//     } finally {
//       setUploading(false);
//     }
//   };


//   return (
//     <div className="flex flex-col items-center">
//       <div className="mb-4">
//         {previewUrl ? (
//           <Image
//             src={previewUrl}
//             alt="Selected profile"
//             width={56} 
//             height={56}
//             className="w-40 h-40 rounded-full object-cover"
//           />
//         ) : (
//           <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
//             <span className="text-gray-500">No image</span>
//           </div>
//         )}
//       </div>

//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         className="mb-4"
//       />

//       <button
//         onClick={handleUpload}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//         disabled={uploading}
//       >
//         {uploading ? "Uploading..." : "Upload Image"}
//       </button>
//     </div>
//   );
// }
