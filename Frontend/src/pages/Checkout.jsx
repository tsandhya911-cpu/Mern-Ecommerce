import { toast } from "react-toastify";
import { useContext, useState } from "react";
import API from "../services/api";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [address, setAddress] = useState({
        name: "",
        phone: "",
        city: "",
        address: ""
    });

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        let newErrors = {};

        if (!address.name) newErrors.name = "Name is required";
        if (!address.phone) newErrors.phone = "Phone is required";
        if (!address.city) newErrors.city = "City is required";
        if (!address.address) newErrors.address = "Address is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleOrder = async () => {
        if (loading) return;

        if (!validate()) {
            toast.error("Please fill all details 😢");
            return;
        }

        setLoading(true);

        try {
            const res = await API.post("/orders", {
                orderItems: cart,
                totalPrice,
                shippingAddress: address
            });

            toast.success("Order Placed Successfully 🎉");
            clearCart();
            navigate(`/order/${res.data._id}`);

        } catch (error) {
            toast.error("Order Failed ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white py-10 px-4">

            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-10 
                bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Checkout 🛍
                </h1>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT FORM */}
                    <div className="backdrop-blur-lg bg-white/60 border border-white/30 
                    rounded-3xl p-6 shadow-xl">

                        <h2 className="text-xl font-bold mb-5 text-purple-700">
                            Shipping Details
                        </h2>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={address.name}
                            onChange={handleChange}
                            className="input"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={address.phone}
                            onChange={handleChange}
                            className="input"
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={address.city}
                            onChange={handleChange}
                            className="input"
                        />
                        {errors.city && <p className="error">{errors.city}</p>}

                        <textarea
                            name="address"
                            placeholder="Full Address"
                            value={address.address}
                            onChange={handleChange}
                            rows={4}
                            className="input"
                        />
                        {errors.address && <p className="error">{errors.address}</p>}
                    </div>

                    {/* RIGHT SUMMARY */}
                    <div className="backdrop-blur-lg bg-white/60 border border-white/30 
                    rounded-3xl p-6 shadow-xl h-fit md:sticky md:top-24">

                        <h2 className="text-xl font-bold mb-5 text-purple-700">
                            Order Summary
                        </h2>

                        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                            {cart.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex justify-between bg-white/70 p-3 rounded-xl shadow"
                                >
                                    <span className="text-sm">
                                        {item.name} × {item.qty}
                                    </span>
                                    <span className="text-pink-500 font-semibold">
                                        ₹{item.price * item.qty}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span className="text-pink-500">₹{totalPrice}</span>
                        </div>

                        <button
                            type="button"
                            onClick={handleOrder}
                            disabled={loading}
                            className={`w-full mt-6 py-3 rounded-xl text-white font-semibold transition
                            ${loading
                                    ? "bg-gray-400"
                                    : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 shadow-md"
                                }`}
                        >
                            {loading ? "Placing..." : "Place Order 🛍"}
                        </button>
                    </div>

                </div>
            </div>

            {/* STYLES */}
            <style>{`
                .input {
                    width: 100%;
                    margin-bottom: 12px;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 12px;
                    outline: none;
                    background: rgba(255,255,255,0.7);
                }
                .input:focus {
                    border-color: #ec4899;
                    box-shadow: 0 0 0 2px rgba(236,72,153,0.2);
                }
                .error {
                    color: red;
                    font-size: 12px;
                    margin-bottom: 10px;
                }
            `}</style>

        </div>
    );
};

export default Checkout;