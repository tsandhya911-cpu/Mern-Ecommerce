import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [loading, setLoading] = useState(false);

    const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice, clearCart } =
        useContext(CartContext);

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white py-8 px-4">



            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-10 
                bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Your Cart 🛒
                </h1>

                {cart.length === 0 ? (
                    <div className="text-center mt-20">
                        <p className="text-gray-500 text-lg">Your cart is empty 😔</p>
                        <button
                            onClick={() => navigate("/")}
                            className="mt-5 px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* LEFT */}
                        <div className="md:col-span-2 space-y-5">

                            {cart.map((item) => (
                                <div
                                    key={item._id}
                                    className="backdrop-blur-lg bg-white/60 border border-white/30 
                                    rounded-3xl p-4 shadow-xl hover:shadow-pink-300 
                                    hover:scale-[1.02] transition duration-300 flex flex-col sm:flex-row gap-4"
                                >

                                    {/* IMAGE */}
                                    <div className="w-full sm:w-28 h-28 flex items-center justify-center bg-purple-100 rounded-xl">
                                        <img
                                            src={
                                                item.image.startsWith("http")
                                                    ? item.image
                                                    : `http://localhost:5000${item.image}`
                                            }
                                            alt={item.name}
                                            className="w-24 h-24 object-contain"
                                        />
                                    </div>

                                    {/* DETAILS */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <h2 className="font-semibold text-lg text-gray-800">
                                            {item.name}
                                        </h2>

                                        <p className="text-pink-500 font-bold text-lg">
                                            ₹{item.price}
                                        </p>

                                        {/* QTY */}
                                        <div className="flex justify-center sm:justify-start items-center gap-3 mt-3">

                                            {/* DECREASE */}
                                            <button
                                                onClick={() => {
                                                    decreaseQty(item._id);
                                                    toast.info("Quantity decreased 🔽");
                                                }}
                                                className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
                                            >
                                                -
                                            </button>

                                            <span className="px-4 py-1 border rounded-lg bg-white">
                                                {item.qty}
                                            </span>

                                            {/* INCREASE */}
                                            <button
                                                onClick={() => {
                                                    increaseQty(item._id);
                                                    toast.success("Quantity increased 🔼");
                                                }}
                                                className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
                                            >
                                                +
                                            </button>

                                        </div>
                                    </div>

                                    {/* REMOVE */}
                                    <button
                                        onClick={() => {
                                            removeFromCart(item._id);
                                            // ❌ yaha toast mat laga (already context me hai)
                                        }}
                                        className="text-red-500 font-semibold hover:underline"
                                    >
                                        Remove
                                    </button>

                                </div>
                            ))}

                        </div>

                        {/* RIGHT */}
                        <div
                            className="backdrop-blur-lg bg-white/60 border border-white/30 
                            rounded-3xl p-6 shadow-xl h-fit md:sticky md:top-24"
                        >

                            <h2 className="text-xl font-bold mb-5 text-purple-700">
                                Order Summary
                            </h2>

                            <div className="flex justify-between mb-3 text-gray-600">
                                <span>Items</span>
                                <span>{cart.length}</span>
                            </div>

                            <div className="flex justify-between mb-5 text-gray-600">
                                <span>Total</span>
                                <span className="font-bold text-pink-500 text-lg">
                                    ₹{totalPrice}
                                </span>
                            </div>

                            <button
                                onClick={() => navigate("/checkout")}
                                className="w-full py-3 rounded-xl text-white font-semibold 
                                bg-gradient-to-r from-pink-500 to-purple-600 
                                hover:scale-105 transition shadow-md"
                            >
                                Proceed to Checkout 🛍
                            </button>

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;