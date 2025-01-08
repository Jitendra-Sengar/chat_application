import { Link } from "react-router-dom";
import { FaXTwitter, FaSquareInstagram, FaTelegram } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="flex items-center justify-around p-4 bg-[#1a1a1a] border-b border-gray-800">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-[#f4a7a7] text-xl font-semibold">
          Logo
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-[#f4a7a7] text-sm font-semibold">Copyright@Jitendra Sengar</p>
        <Link to="/" className="text-[#f4a7a7] text-xl font-semibold">
          <FaTelegram />
        </Link>
        <Link to="/" className="text-[#f4a7a7] text-xl font-semibold">
          <FaSquareInstagram />
        </Link>
        <Link to="/" className="text-[#f4a7a7] text-xl font-semibold">
          <FaXTwitter />
        </Link>
      </div>
    </footer>
  );
}
