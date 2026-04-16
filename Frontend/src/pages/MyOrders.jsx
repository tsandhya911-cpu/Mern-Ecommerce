// import { toast } from "react-toastify";
// import API from "../services/api";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const MyOrders = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const res = await API.get("/orders");
//                 setOrders(res.data);
//             } catch (error) {
//                 toast.error("Failed to load orders ❌");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen text-pink-500 text-lg sm:text-xl">
//                 Loading Orders...
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white py-6 px-3 sm:px-6">

//             <div className="w-full max-w-5xl mx-auto">

//                 {/* HEADER */}
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6 sm:mb-8">
//                     My Orders 📦
//                 </h1>

//                 {orders.length === 0 ? (
//                     <p className="text-center text-gray-400 text-sm sm:text-lg">
//                         No Orders Yet 😢
//                     </p>
//                 ) : (
//                     <div className="space-y-4 sm:space-y-6">

//                         {orders.map((order) => (
//                             <div
//                                 key={order._id}
//                                 className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-pink-300 transition"
//                             >

//                                 {/* TOP */}
//                                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

//                                     <div>
//                                         <h2 className="font-bold text-base sm:text-lg text-gray-800">
//                                             Order #{order._id?.slice(-6)}
//                                         </h2>

//                                         <p className="text-xs sm:text-sm text-gray-400">
//                                             {new Date(order.createdAt).toLocaleDateString()}
//                                         </p>
//                                     </div>

//                                     <span
//                                         className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit ${order.isPaid
//                                                 ? "bg-green-100 text-green-600"
//                                                 : "bg-red-100 text-red-500"
//                                             }`}
//                                     >
//                                         {order.isPaid ? "Paid ✅" : "Pending ⏳"}
//                                     </span>
//                                 </div>

//                                 {/* TOTAL */}
//                                 <div className="mt-3 flex justify-between items-center text-sm sm:text-base">
//                                     <p className="text-gray-600">
//                                         Total Amount
//                                     </p>
//                                     <p className="font-bold text-pink-500">
//                                         ₹{order.totalPrice}
//                                     </p>
//                                 </div>

//                                 {/* PRODUCTS */}
//                                 <div className="mt-4 space-y-3">
//                                     {order.orderItems?.map((item, index) => (
//                                         <div
//                                             key={index}
//                                             className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-purple-50 p-3 rounded-xl"
//                                         >

//                                             <img
//                                                 src={
//                                                     item.image?.startsWith("http")
//                                                         ? item.image
//                                                         : item.image?.startsWith("/images")
//                                                             ? `http://localhost:5000${item.image}`
//                                                             : `http://localhost:5000/images/${item.image}`
//                                                 }
//                                                 alt={item.name}
//                                                 className="w-20 h-20 object-cover rounded-lg border"
//                                             />

//                                             <div className="flex-1 text-center sm:text-left">
//                                                 <p className="font-semibold text-gray-800 text-sm sm:text-base">
//                                                     {item.name}
//                                                 </p>
//                                                 <p className="text-xs sm:text-sm text-gray-500">
//                                                     Qty: {item.qty} × ₹{item.price}
//                                                 </p>
//                                             </div>

//                                             <p className="font-semibold text-pink-600 text-sm sm:text-base">
//                                                 ₹{item.qty * item.price}
//                                             </p>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* BUTTON */}
//                                 <div className="mt-4 text-center sm:text-right">
//                                     <Link to={`/order/${order._id}`}>
//                                         <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-5 py-2 rounded-lg">
//                                             View Details →
//                                         </button>
//                                     </Link>
//                                 </div>

//                             </div>
//                         ))}

//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyOrders;

import { toast } from "react-toastify";
import API from "../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await API.get("/orders");
                setOrders(res.data);
            } catch (error) {
                toast.error("Failed to load orders ❌");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen text-pink-500 text-xl font-semibold">
                Loading Orders...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white py-10 px-4">

            <div className="max-w-5xl mx-auto">

                {/* HEADER */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 
                bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                    My Orders 📦
                </h1>

                {orders.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg">
                        No Orders Yet 😢
                    </p>
                ) : (
                    <div className="space-y-6">

                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="backdrop-blur-lg bg-white/60 border border-white/30 
                                rounded-3xl p-5 md:p-6 shadow-xl hover:shadow-pink-300 
                                hover:scale-[1.01] transition duration-300"
                            >

                                {/* TOP */}
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

                                    <div>
                                        <h2 className="font-bold text-lg text-gray-800">
                                            Order #{order._id?.slice(-6)}
                                        </h2>

                                        <p className="text-sm text-gray-400">
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <span
                                        className={`px-4 py-1 rounded-full text-sm font-semibold w-fit 
                                        ${order.isPaid
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-500"
                                            }`}
                                    >
                                        {order.isPaid ? "Paid ✅" : "Pending ⏳"}
                                    </span>
                                </div>

                                {/* TOTAL */}
                                <div className="mt-4 flex justify-between items-center">
                                    <p className="text-gray-600">Total Amount</p>
                                    <p className="font-bold text-pink-500 text-lg">
                                        ₹{order.totalPrice}
                                    </p>
                                </div>

                                {/* PRODUCTS */}
                                <div className="mt-5 space-y-3">

                                    {order.orderItems?.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col sm:flex-row items-center gap-4 
                                            bg-white/70 backdrop-blur-md p-3 rounded-xl shadow"
                                        >

                                            <img
                                                src={
                                                    item.image?.startsWith("http")
                                                        ? item.image
                                                        : item.image?.startsWith("/images")
                                                            ? `http://localhost:5000${item.image}`
                                                            : `http://localhost:5000/images/${item.image}`
                                                }
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-lg border"
                                            />

                                            <div className="flex-1 text-center sm:text-left">
                                                <p className="font-semibold text-gray-800">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Qty: {item.qty} × ₹{item.price}
                                                </p>
                                            </div>

                                            <p className="font-semibold text-pink-600">
                                                ₹{item.qty * item.price}
                                            </p>
                                        </div>
                                    ))}

                                </div>

                                {/* BUTTON */}
                                <div className="mt-5 text-center md:text-right">
                                    <Link to={`/order/${order._id}`}>
                                        <button className="w-full md:w-auto px-5 py-2 rounded-xl 
                                        bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                                        hover:scale-105 transition shadow-md">
                                            View Details →
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;