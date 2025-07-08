import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

const socialMedia = [
  { name: "Facebook", icon: Facebook, href: "" },
  { name: "Instagram", icon: Instagram, href: "" },
  { name: "YouTube", icon: Youtube, href: "" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#70966D] text-white py-3 flex flex-col items-center">
      <div className="flex flex-wrap justify-around items-start max-w-6xl w-full px-6 mb-6">
        <div className="flex flex-col items-center mb-3 md:mb-0">
          <Image 
            src="/logoCC.png" 
            alt="Logo" 
            width={156} 
            height={156} 
            className="mb-2 w-40 h-40 object-contain" 
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0 w-full md:w-auto text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full">
            <h2 className="text-xl font-kalam font-bold mb-1">Sitemap</h2>
            <p className="mb-3 font-kalam">Explore our site</p>
            <ul className="space-y-1 text-sm">
              <li className="font-kalam">Home</li>
              <li className="font-kalam">Recipes</li>
              <li className="font-kalam">Inspiration</li>
              <li className="font-kalam">Blog</li>
              <li className="font-kalam">My Profile</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-auto">
          <h2 className="text-xl font-bold mb-2 font-kalam">Contact Us</h2>
          <p className="mb-1 font-kalam text-sm">
            <span className="font-bold">Phone:</span> +385 123 000
          </p>
          <p className="mb-3 font-kalam text-sm">
            <span className="font-bold">Email:</span> info@coolcook.com
          </p>
          <h2 className="text-xl font-bold mt-6 md:mt-2 mb-2 font-kalam">Follow Us</h2>
          <div className="flex space-x-3">
            {socialMedia.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-gray-300 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[1300px] text-center mt-6 border-t border-white pt-2">
        <p className="text-xs font-kalam">&copy; 2025 CoolCook. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
