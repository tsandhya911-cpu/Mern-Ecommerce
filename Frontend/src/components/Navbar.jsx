import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem("userInfo"));

    const navLink = (path) =>
        `relative py-2 px-1 transition 
        ${location.pathname === path
            ? "text-pink-500 font-semibold"
            : "text-gray-600 hover:text-pink-500"
        }`;

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/60 border-b border-white/30 shadow-sm">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

                {/* LOGO */}
                <h1
                    onClick={() => navigate("/")}
                    className="text-2xl font-extrabold cursor-pointer 
                    bg-gradient-to-r from-pink-500 to-purple-600 
                    bg-clip-text text-transparent"
                >
                    ShopEasy
                </h1>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-6 items-center text-sm">

                    {["/", "/cart", "/orders", "/about", "/contact"].map((path, i) => {
                        const names = ["Home", "Cart", "Orders", "About", "Contact"];
                        return (
                            <Link key={i} to={path} className={navLink(path)}>
                                {names[i]}

                                {/* 🔥 ACTIVE UNDERLINE */}
                                {location.pathname === path && (
                                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
                                )}
                            </Link>
                        );
                    })}

                </div>

                {/* RIGHT SIDE */}
                <div className="hidden md:flex items-center gap-4">

                    {user ? (
                        <>
                            <span className="text-sm text-gray-700">
                                Hi, <span className="font-semibold text-pink-500">{user.name}</span>
                            </span>

                            <button
                                onClick={() => navigate("/profile")}
                                className="px-3 py-1 rounded-lg bg-purple-100 text-purple-600 text-sm hover:bg-purple-200 transition"
                            >
                                Profile
                            </button>

                            <button
                                onClick={handleLogout}
                                className="px-3 py-1 rounded-lg bg-red-100 text-red-500 text-sm hover:bg-red-200 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 
                            text-white text-sm font-semibold hover:scale-105 transition"
                        >
                            Login
                        </Link>
                    )}

                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </button>

            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden px-4 pb-4 backdrop-blur-lg bg-white/70 border-t border-white/30">

                    {["/", "/cart", "/orders", "/about", "/contact"].map((path, i) => {
                        const names = ["Home", "Cart", "Orders", "About", "Contact"];
                        return (
                            <Link
                                key={i}
                                to={path}
                                onClick={() => setOpen(false)}
                                className={`block py-2 text-sm 
                                ${location.pathname === path
                                        ? "text-pink-500 font-semibold"
                                        : "text-gray-600"
                                    }`}
                            >
                                {names[i]}
                            </Link>
                        );
                    })}

                    <div className="mt-3 border-t pt-3">

                        {user ? (
                            <>
                                <p className="text-sm mb-2">
                                    Hi, <span className="text-pink-500 font-semibold">{user.name}</span>
                                </p>

                                <button
                                    onClick={() => {
                                        navigate("/profile");
                                        setOpen(false);
                                    }}
                                    className="block py-2 text-sm"
                                >
                                    Profile
                                </button>

                                <button
                                    onClick={handleLogout}
                                    className="block py-2 text-red-500 text-sm"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="block py-2 text-pink-500 text-sm font-semibold"
                            >
                                Login
                            </Link>
                        )}

                    </div>

                </div>
            )}

        </nav>
    );
};

export default Navbar;