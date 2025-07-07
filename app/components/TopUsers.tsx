"use client";

import Image from "next/image";

const users = [
  { name: "Emily", image: "/Emily.jpeg" },
  { name: "Benjamin", image: "/Benjamin.jpeg" },
  { name: "James", image: "/James.jpeg" },
  { name: "Olivia", image: "/Olivia.jpeg" },
  { name: "Sophia", image: "/Sophia.jpeg" },
  { name: "Liam", image: "/Liam.jpeg" },
  { name: "Charlotte", image: "/Charlotte.jpeg" },
  { name: "Lucas", image: "/Lucas.jpeg" },
];

export default function TopUsers() {
  return (
    <div className="w-full font-kalam">
      <div className="flex flex-wrap justify-start gap-7 px-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[180px] sm:w-[200px] p-2 cursor-pointer"
          >
            <div className="w-full aspect-square rounded-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src={user.image}
                alt={`${user.name} image`}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base font-semibold text-[#233122e8] uppercase text-center truncate mt-3 transition-colors duration-300 ease-in-out hover:text-[#406030]">
              {user.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
