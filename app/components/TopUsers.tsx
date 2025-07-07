"use client"; 

import { useEffect, useState } from "react";
import Image from "next/image";
import supabase, { getPublicImageUrl } from "@/src/supabase/supabaseClient";

export default function TopUsers() {
  const [users, setUsers] = useState<{ image: any; name: any; }[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("users") 
        .select("name, image");

      if (error) {
        console.error("Error fetching users:", error);
      } 

      console.log("Fetched data from Supabase:", data); // samo provjera
      
      const usersWithImages = data?.map(user => ({
        ...user,
        image: user.image?.startsWith("http") ? user.image : getPublicImageUrl(user.image)
        
      }));

      setUsers(usersWithImages ?? []);
    };

    fetchUsers();
  }, []);

  return (
    <div className="mt-10 mb-10 w-full flex justify-center font-kalam">
      <div className="flex justify-around w-[70%] items-center flex-wrap mb-6">
        {users.map((user, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="h-[120px] w-[120px] rounded-full overflow-hidden">
              <Image
                src={user.image}
                alt={`${user.name} image`}
                width={120}
                height={120}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
