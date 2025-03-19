import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#70966D] text-white py-6 flex flex-col items-center">
      <div className="flex flex-wrap justify-around items-start max-w-6xl w-full px-6 mb-8">
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <Image 
            src="/logoCC.png" 
            alt="Logo" 
            width={100} 
            height={20} 
            className="mb-4 sm:w-32 sm:h-32 md:w-40 md:h-40" 
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-8 md:mb-0 w-full md:w-auto text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full">
            <h2 className="text-xl font-kalam font-bold mb-2">Sitemap</h2>
            <p className="mb-5 font-kalam">Explore our site</p>
            <ul className="space-y-2">
              <li className="font-kalam">Home</li>
              <li className="font-kalam">Recipes</li>
              <li className="font-kalam">Inspiration</li>
              <li className="font-kalam">Blog</li>
              <li className="font-kalam">My Profile</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-auto">
          <h2 className="text-xl font-bold mb-4 font-kalam">Contact Us</h2>
          <p className="mb-2 font-kalam">
            <span className="font-bold">Phone:</span> +385 123 000
          </p>
          <p className="mb-4 font-kalam">
            <span className="font-bold">Email:</span> info@coolcook.com
          </p>
          <h2 className="text-xl font-bold mb-4 font-kalam">Follow Us</h2>
          <div className="flex space-x-4">
            <div className="transition-opacity">
              <Image 
                src="/fb.png" 
                alt="Facebook" 
                width={24} 
                height={24} 
                className="sm:w-8 sm:h-8 md:w-10 md:h-10" 
              />
            </div>
            <div className="transition-opacity">
              <Image 
                src="/ig.png" 
                alt="Instagram" 
                width={24} 
                height={24} 
                className="sm:w-8 sm:h-8 md:w-10 md:h-10" 
              />
            </div>
            <div className="transition-opacity">
              <Image 
                src="/yt.png" 
                alt="YouTube" 
                width={24} 
                height={24} 
                className="sm:w-8 sm:h-8 md:w-10 md:h-10" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 border-white pt-4">
        <p className="text-sm font-kalam">&copy; 2024 CoolCook. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
