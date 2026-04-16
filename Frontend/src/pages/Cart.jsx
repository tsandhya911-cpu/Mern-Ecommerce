// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import API from "../services/api";
// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//     const [loading, setLoading] = useState(false);

//     const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice, clearCart } =
//         useContext(CartContext);

//     const navigate = useNavigate();

//     const placeOrder = async () => {
//         if (loading) return;
//         setLoading(true);

//         try {
//             const orderData = {
//                 orderItems: cart.map(item => ({
//                     name: item.name,
//                     qty: item.qty,
//                     price: item.price,
//                     image: item.image
//                 })),
//                 totalPrice
//             };

//             await API.post("/orders", orderData);

//             toast.success("Order Placed Successfully 🎉");
//             clearCart();
//             navigate("/orders");

//         } catch (error) {
//             toast.error("Order Failed ❌");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen py-6 px-3 sm:px-6">

//             <ToastContainer position="top-right" autoClose={2000} />

//             <div className="w-full max-w-7xl mx-auto">

//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-pink-500 mb-6 sm:mb-8">
//                     Your Cart 🛒
//                 </h1>

//                 {cart.length === 0 ? (
//                     <div className="text-center mt-16 sm:mt-20">
//                         <p className="text-gray-400 text-base sm:text-lg">Your cart is empty 😔</p>
//                         <button
//                             onClick={() => navigate("/")}
//                             className="mt-4 bg-pink-500 text-white px-5 py-2 rounded-full"
//                         >
//                             Continue Shopping
//                         </button>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

//                         {/* LEFT */}
//                         <div className="md:col-span-2 space-y-4">

//                             {cart.map((item) => (
//                                 <div
//                                     key={item._id}
//                                     className="bg-white p-3 sm:p-4 rounded-2xl shadow flex flex-col sm:flex-row gap-3 sm:gap-4 hover:shadow-lg transition"
//                                 >

//                                     {/* IMAGE */}
//                                     <div className="w-full sm:w-24 h-32 sm:h-24 flex items-center justify-center bg-purple-100 rounded-xl">
//                                         <img
//                                             src={
//                                                 item.image.startsWith("http")
//                                                     ? item.image
//                                                     : `http://localhost:5000${item.image}`
//                                             }
//                                             alt={item.name}
//                                             className="w-full sm:w-20 h-full sm:h-20 object-contain"
//                                         />
//                                     </div>

//                                     {/* DETAILS */}
//                                     <div className="flex-1 text-center sm:text-left">
//                                         <h2 className="font-semibold text-base sm:text-lg">
//                                             {item.name}
//                                         </h2>

//                                         <p className="text-pink-500 font-bold">
//                                             ₹{item.price}
//                                         </p>

//                                         {/* QTY */}
//                                         <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
//                                             <button
//                                                 onClick={() => decreaseQty(item._id)}
//                                                 className="bg-gray-200 px-3 py-1 rounded"
//                                             >
//                                                 -
//                                             </button>

//                                             <span className="px-3 py-1 border rounded">
//                                                 {item.qty}
//                                             </span>

//                                             <button
//                                                 onClick={() => increaseQty(item._id)}
//                                                 className="bg-gray-200 px-3 py-1 rounded"
//                                             >
//                                                 +
//                                             </button>
//                                         </div>
//                                     </div>

//                                     {/* REMOVE */}
//                                     <button
//                                         onClick={() => removeFromCart(item._id)}
//                                         className="text-red-500 text-sm sm:text-base"
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             ))}

//                         </div>

//                         {/* RIGHT */}
//                         <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md h-fit md:sticky md:top-24">

//                             <h2 className="text-lg sm:text-xl font-bold mb-4 text-purple-700">
//                                 Order Summary
//                             </h2>

//                             <div className="flex justify-between mb-2 text-gray-600 text-sm sm:text-base">
//                                 <span>Items</span>
//                                 <span>{cart.length}</span>
//                             </div>

//                             <div className="flex justify-between mb-4 text-gray-600 text-sm sm:text-base">
//                                 <span>Total</span>
//                                 <span className="font-bold text-pink-500">
//                                     ₹{totalPrice}
//                                 </span>
//                             </div>

//                             {/* <button
//                                 onClick={placeOrder}
//                                 disabled={loading}
//                                 className={`w-full py-2 sm:py-3 rounded-xl text-white font-semibold
//                                 ${loading
//                                         ? "bg-gray-400"
//                                         : "bg-pink-500 hover:bg-pink-600"
//                                     }`}
//                             >
//                                 {loading ? "Placing..." : "Place Order 🛍"}
//                             </button> */}

//                             <button
//                                 onClick={() => navigate("/checkout")}
//                                 className="w-full py-2 sm:py-3 rounded-xl text-white font-semibold bg-pink-500 hover:bg-pink-600"
//                             >
//                                 Proceed to Checkout 🛍
//                             </button>

//                         </div>

//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;

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