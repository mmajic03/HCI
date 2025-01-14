import UploadProfileImage from './_components/UploadProfileImage';

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-[#9C8D71E8]">
      <h1 className="text-6xl font-extrabold tracking-tight">Profile</h1>
     
      <UploadProfileImage />
    </main>
  );
}