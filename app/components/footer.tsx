const Footer = () => {
    return (
      <footer className="w-screen bg-[#70966D] text-white py-6 flex flex-col items-center">
        <div className="flex flex-wrap justify-around items-start max-w-6xl w-full px-6 mb-8">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src="../logoCC.png" className="h-30 w-auto mb-4" />
          </div>
  
          <div className="flex flex-col md:flex-row md:space-x-8 mb-8 md:mb-0 w-full md:w-auto text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full">
              <h2 className="text-xl font-bold mb-0">Sitemap</h2>
              <p className="mb-5">Explore our site</p>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Recipes</li>
                <li>Inspiration</li>
                <li>Blog</li>
                <li>My Profile</li>
              </ul>
            </div>
          </div>
  
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-auto">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> +385 123 000
            </p>
            <p className="mb-4">
              <span className="font-bold">Email:</span> info@coolcook.com
            </p>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <div className="h-6 w-6 transition-opacity">
                <img src="/fb.png" alt="Facebook"/>
              </div>
              <div className="h-6 w-6 transition-opacity">
                <img src="/ig.png" alt="Instagram"/>
              </div>
              <div className="h-6 w-6 transition-opacity">
                <img src="/yt.png" alt="YouTube"/>
              </div>
            </div>
          </div>
        </div>
  
        <div className="text-center mt-12 border-white pt-4">
          <p className="text-sm">&copy; 2024 CoolCook. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  