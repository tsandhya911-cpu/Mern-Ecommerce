
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-purple-800 text-white mt-8">
            <div className="max-w-7xl mx-auto px-4 py-10 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {/* Logo & About */}
                <div className="flex flex-col gap-3 text-center sm:text-left">
                    <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
                        ShopEasy
                    </h1>
                    <p className="text-gray-200 text-sm">
                        Your one-stop shop for all your favorite products. ShopEasy makes online shopping simple and fun!
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-2 text-center sm:text-left">
                    <h2 className="font-semibold text-lg">Quick Links</h2>
                    <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-pink-400 transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-pink-400 transition-colors">Contact</Link>
                    <Link to="/cart" className="hover:text-pink-400 transition-colors">Cart</Link>
                </div>

                {/* Social Media */}
                <div className="flex flex-col gap-3 items-center sm:items-start">
                    <h2 className="font-semibold text-lg">Follow Us</h2>
                    <div className="flex gap-5 text-xl">
                        <a href="#" className="hover:text-pink-400 transition"><FaFacebook /></a>
                        <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-pink-400 transition"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-purple-600 pt-4 text-center text-gray-300 text-sm px-4">
                &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;