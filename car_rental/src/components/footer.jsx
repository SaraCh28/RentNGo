import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaCarSide } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-purple-600/40">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <a href="#" className="flex items-center gap-2">
            <img src="/logo2.png" alt="Logo" className="w-15 h-15 object-contain" />
          <h1 className="text-2xl text-white">
            RentN<span className="text-[#6438c2]">Go</span>
          </h1>
          </a>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Premium car rentals made simple, fast, and reliable.  
            Drive your dream — anytime, anywhere.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-purple-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-purple-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-purple-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-purple-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/browse" className="hover:text-white transition">Browse Cars</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* CUSTOMER SECTION */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Customer Support</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/support" className="hover:text-white transition">Help Center</a></li>
            <li><a href="/renting-guide" className="hover:text-white transition">How Renting Works</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact Us</h3>

          <div className="flex items-start gap-3 text-gray-300">
            <MdEmail className="text-xl text-purple-400" />
            <p>support@rentngo.com</p>
          </div>

          <div className="flex items-start gap-3 mt-3 text-gray-300">
            <MdPhone className="text-xl text-purple-400" />
            <p>+92 300 1234567</p>
          </div>

          <div className="flex items-start gap-3 mt-3 text-gray-300">
            <MdLocationOn className="text-xl text-purple-400" />
            <p>Lahore, Pakistan</p>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-purple-600/20 mt-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-purple-400 font-medium">RentNGo</span>.  
        All rights reserved.
      </div>
    </footer>
  );
}
