// import { toast } from "react-toastify";
// import API from "../services/api";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const OrderDetails = () => {
//     const { id } = useParams();
//     const [order, setOrder] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchOrder = async () => {
//             try {
//                 const { data } = await API.get(`/orders/${id}`);
//                 setOrder(data);
//             } catch (error) {
//                 toast.error("Failed to load order ❌");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrder();
//     }, [id]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen text-pink-500 text-lg sm:text-xl">
//                 Loading Order...
//             </div>
//         );
//     }

//     const handlePayment = async () => {
//         try {
//             await API.put(`/orders/${id}/pay`);
//             toast.success("Payment Successful 💸");
//             window.location.reload();
//         } catch (error) {
//             toast.error("Payment Failed ❌");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white py-6 px-3 sm:px-6">

//             <div className="w-full max-w-5xl mx-auto bg-white shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">

//                 {/* HEADER */}
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 sm:mb-6">
//                     Order Details 🧾
//                 </h1>

//                 {/* INFO */}
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">

//                     <div>
//                         <p className="text-gray-500 text-sm sm:text-base">
//                             Order ID:
//                             <span className="font-semibold text-gray-800 ml-1">
//                                 #{order._id.slice(-6)}
//                             </span>
//                         </p>

//                         <p className="text-gray-400 text-xs sm:text-sm">
//                             {new Date(order.createdAt).toLocaleDateString()}
//                         </p>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                         <span className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold 
//                             ${order.status === "Delivered"
//                                 ? "bg-green-100 text-green-600"
//                                 : order.status === "Shipped"
//                                     ? "bg-blue-100 text-blue-600"
//                                     : "bg-yellow-100 text-yellow-600"
//                             }`}>
//                             {order.status}
//                         </span>

//                         <span className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold 
//                             ${order.isPaid
//                                 ? "bg-green-100 text-green-600"
//                                 : "bg-red-100 text-red-500"
//                             }`}>
//                             {order.isPaid ? "Paid ✅" : "Unpaid ❌"}
//                         </span>
//                     </div>
//                 </div>

//                 {/* PAY BUTTON */}
//                 {!order.isPaid && (
//                     <button
//                         onClick={handlePayment}
//                         className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-lg mb-5"
//                     >
//                         Pay Now 💳
//                     </button>
//                 )}

//                 {/* ITEMS */}
//                 <div className="space-y-3 sm:space-y-4">
//                     {order.orderItems.map((item, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-purple-50 p-3 sm:p-4 rounded-xl"
//                         >

//                             <img
//                                 src={
//                                     item.image?.startsWith("http")
//                                         ? item.image
//                                         : item.image?.startsWith("/images")
//                                             ? `http://localhost:5000${item.image}`
//                                             : `http://localhost:5000/images/${item.image}`
//                                 }
//                                 alt={item.name}
//                                 className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-lg border"
//                             />

//                             <div className="flex-1 text-center sm:text-left">
//                                 <h2 className="font-semibold text-sm sm:text-lg text-gray-800">
//                                     {item.name}
//                                 </h2>

//                                 <p className="text-xs sm:text-sm text-gray-500">
//                                     Qty: {item.qty}
//                                 </p>

//                                 <p className="text-pink-500 font-bold text-sm sm:text-base">
//                                     ₹{item.price}
//                                 </p>
//                             </div>

//                             <div className="font-bold text-purple-600 text-sm sm:text-base">
//                                 ₹{item.qty * item.price}
//                             </div>

//                         </div>
//                     ))}
//                 </div>

//                 {/* SHIPPING ADDRESS */}
//                 <div className="mt-6 sm:mt-8 bg-gray-50 p-4 sm:p-6 rounded-xl border">

//                     <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-3">
//                         Shipping Address 🚚
//                     </h2>

//                     <div className="text-sm sm:text-base text-gray-700 space-y-1">
//                         <p><span className="font-semibold">Name:</span> {order.shippingAddress?.name}</p>
//                         <p><span className="font-semibold">Phone:</span> {order.shippingAddress?.phone}</p>
//                         <p><span className="font-semibold">City:</span> {order.shippingAddress?.city}</p>
//                         <p><span className="font-semibold">Address:</span> {order.shippingAddress?.address}</p>
//                     </div>

//                 </div>




//                 {/* TOTAL */}
//                 <div className="mt-6 sm:mt-8 text-center sm:text-right border-t pt-4">
//                     <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-pink-500">
//                         Total: ₹{order.totalPrice}
//                     </h2>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default OrderDetails;

import { toast } from "react-toastify";
import API from "../services/api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const { data } = await API.get(`/orders/${id}`);
                setOrder(data);
            } catch (error) {
                toast.error("Failed to load order ❌");
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen text-pink-500 text-xl font-semibold">
                Loading Order...
            </div>
        );
    }

    const handlePayment = async () => {
        setLoading(true);
        try {
            await API.put(`/orders/${id}/pay`);
            // toast.success("Payment Successful 💸");
            // window.location.reload();
            navigate("/success");
        } catch (error) {
            console.log(error);
            toast.error("Payment Failed ❌");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white py-8 px-4">

            <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/60 border border-white/30 
            rounded-3xl shadow-2xl p-5 md:p-8">

                {/* HEADER */}
                <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center 
                bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Order Details 🧾
                </h1>

                {/* TOP INFO */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

                    <div>
                        <p className="text-gray-500 text-sm">
                            Order ID:
                            <span className="font-semibold text-gray-800 ml-1">
                                #{order._id.slice(-6)}
                            </span>
                        </p>

                        <p className="text-gray-400 text-sm">
                            {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                    </div>

                    <div className="flex gap-2 flex-wrap">

                        <span className={`px-4 py-1 rounded-full text-sm font-semibold
                        ${order.status === "Delivered"
                                ? "bg-green-100 text-green-600"
                                : order.status === "Shipped"
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-yellow-100 text-yellow-600"
                            }`}>
                            {order.status}
                        </span>

                        <span className={`px-4 py-1 rounded-full text-sm font-semibold
                        ${order.isPaid
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-500"
                            }`}>
                            {order.isPaid ? "Paid ✅" : "Unpaid ❌"}
                        </span>

                    </div>
                </div>

                {/* PAY BUTTON */}
                {/* {!order.isPaid && (
                    <div className="text-center md:text-right mb-6">
                        <button
                            onClick={handlePayment}
                            className="px-6 py-2 rounded-xl text-white font-semibold 
                            bg-gradient-to-r from-green-500 to-emerald-600 
                            hover:scale-105 transition shadow-md"
                        >
                            Pay Now 💳
                        </button>
                    </div>
                )} */}

                {!order.isPaid && (
                    <div className="text-center md:text-right mb-6">
                        <button
                            onClick={handlePayment}
                            disabled={loading}   // ✅ YE ADD KAR
                            className="px-6 py-2 rounded-xl text-white font-semibold 
            bg-gradient-to-r from-green-500 to-emerald-600 
            hover:scale-105 transition shadow-md"
                        >
                            {loading ? "Processing..." : "Pay Now 💳"}
                        </button>
                    </div>
                )}

                {/* ITEMS */}
                <div className="space-y-4">

                    {order.orderItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-center gap-4 
                            bg-white/70 backdrop-blur-md p-4 rounded-xl shadow"
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
                                className="w-24 h-24 object-cover rounded-lg border"
                            />

                            <div className="flex-1 text-center sm:text-left">
                                <h2 className="font-semibold text-gray-800">
                                    {item.name}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Qty: {item.qty}
                                </p>

                                <p className="text-pink-500 font-bold">
                                    ₹{item.price}
                                </p>
                            </div>

                            <div className="font-bold text-purple-600">
                                ₹{item.qty * item.price}
                            </div>

                        </div>
                    ))}

                </div>

                {/* SHIPPING */}
                <div className="mt-8 bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow">

                    <h2 className="text-xl font-bold text-purple-700 mb-4">
                        Shipping Address 🚚
                    </h2>

                    <div className="text-gray-700 space-y-1">
                        <p><span className="font-semibold">Name:</span> {order.shippingAddress?.name}</p>
                        <p><span className="font-semibold">Phone:</span> {order.shippingAddress?.phone}</p>
                        <p><span className="font-semibold">City:</span> {order.shippingAddress?.city}</p>
                        <p><span className="font-semibold">Address:</span> {order.shippingAddress?.address}</p>
                    </div>

                </div>

                {/* TOTAL */}
                <div className="mt-8 text-center md:text-right border-t pt-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-pink-500">
                        Total: ₹{order.totalPrice}
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default OrderDetails;