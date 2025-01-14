const users = [
    { name: "Emily", image: "/Emily.jpeg" },
    { name: "Olivia", image: "/Olivia.jpeg" },
    { name: "James", image: "/James.jpeg" },
    { name: "Sophia", image: "/Sophia.jpeg" },
    { name: "Benjamin", image: "/Benjamin.jpeg" },
  ];
  
  export default function TopUsers() {
    return (
      <div className="mt-10 mb-10 w-full flex justify-center">
        <div className="flex justify-around w-[70%] items-center flex-wrap mb-6">
          {users.map((user, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden">
                <img
                  src={user.image}
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
  