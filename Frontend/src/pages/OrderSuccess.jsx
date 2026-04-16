import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-purple-200 via-pink-100 to-white px-4">

            <div className="w-full max-w-md backdrop-blur-xl bg-white/60 
            border border-white/30 rounded-3xl shadow-2xl p-6 sm:p-8 text-center">

                {/* ICON */}
                <div className="text-5xl sm:text-6xl mb-4 animate-bounce">
                    🎉
                </div>

                {/* TITLE */}
                <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 
                bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                    Order Placed Successfully!
                </h1>

                {/* SUBTEXT */}
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    Thank you for shopping with us 💖 <br />
                    Your order is confirmed and will be delivered soon 🚚
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3">

                    <Link to="/orders" className="w-full">
                        <button className="w-full py-3 rounded-xl text-white font-semibold
                        bg-gradient-to-r from-purple-600 to-pink-500 
                        hover:scale-105 transition shadow-md">
                            View Orders 📦
                        </button>
                    </Link>

                    <Link to="/" className="w-full">
                        <button className="w-full py-3 rounded-xl font-semibold
                        border border-pink-500 text-pink-500 
                        hover:bg-pink-500 hover:text-white transition">
                            Continue Shopping 🛍
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default OrderSuccess;