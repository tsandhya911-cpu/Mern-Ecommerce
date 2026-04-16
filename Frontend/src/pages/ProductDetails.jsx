// import { toast } from "react-toastify";
// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../services/api";
// import { CartContext } from "../context/CartContext";
// import Rating from "../components/Rating";

// const ProductDetails = () => {

//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [product, setProduct] = useState({});
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState("");

//     const { addToCart, cart } = useContext(CartContext);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const res = await API.get(`/products/${id}`);
//                 setProduct(res.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     const handleAddToCart = () => {
//         const userInfo = JSON.parse(localStorage.getItem("userInfo"));

//         if (!userInfo) {
//             toast.error("Please login first 😢");
//             navigate("/login");
//             return;
//         }

//         const exists = cart.find(item => item._id === product._id);

//         addToCart(product);

//         if (exists) {
//             toast.info("Quantity increased 🔼");
//         } else {
//             toast.success(`${product.name} added to cart 🛒`);
//         }
//     };

//     const submitReview = async () => {

//         const userInfo = JSON.parse(localStorage.getItem("userInfo"));

//         if (!userInfo) {
//             toast.error("Login required 😢");
//             navigate("/login");
//             return;
//         }

//         const token = userInfo.token;

//         if (!rating || !comment) {
//             toast.error("Please add rating & comment ⭐");
//             return;
//         }

//         try {
//             await API.post(
//                 `/products/${id}/review`,
//                 { rating, comment },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             toast.success("Review submitted 🎉");

//             setRating(0);
//             setComment("");

//             // 🔥 refresh product to show new review
//             const res = await API.get(`/products/${id}`);
//             setProduct(res.data);

//         } catch (error) {
//             console.log(error.response || error.message);
//             toast.error("Error submitting review ❌");
//         }
//     };



//     return (
//         <div className="bg-white text-purple-800 min-h-screen py-6 px-3 sm:px-6">

//             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">

//                 {/* IMAGE */}
//                 <div className="bg-purple-50 p-4 sm:p-6 rounded-xl flex justify-center">
//                     <img
//                         src={`http://localhost:5000/images/${product.image?.split("/").pop()}`}
//                         alt={product.name}
//                         className="w-56 h-56 sm:w-72 sm:h-72 object-contain rounded-lg"
//                     />
//                 </div>

//                 {/* DETAILS */}
//                 <div className="flex flex-col gap-3 sm:gap-4">

//                     <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-500">
//                         {product.name}
//                     </h1>

//                     <div className="flex items-center gap-2">
//                         <Rating value={product.rating || 0} />
//                         <span className="text-purple-400 text-xs sm:text-sm">
//                             ({product.numReviews || 0} reviews)
//                         </span>
//                     </div>

//                     <p className="text-purple-400 text-sm sm:text-base">
//                         {product.description}
//                     </p>

//                     <h2 className="text-xl sm:text-2xl text-pink-500 font-semibold">
//                         ₹{product.price}
//                     </h2>

//                     {/* ADD TO CART */}
//                     <button
//                         onClick={handleAddToCart}
//                         className="w-full sm:w-auto bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold"
//                     >
//                         🛒 Add To Cart
//                     </button>

//                     {/* RATING */}
//                     <div className="mt-4">
//                         <h3 className="font-semibold text-sm sm:text-base">Your Rating:</h3>

//                         <div className="flex gap-1 mt-2 justify-center sm:justify-start">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                                 <button
//                                     key={star}
//                                     type="button"
//                                     onClick={() => setRating(star)}
//                                     className={`text-xl sm:text-2xl ${rating >= star ? "text-pink-500" : "text-gray-300"}`}
//                                 >
//                                     ★
//                                 </button>
//                             ))}
//                         </div>

//                         <p className="mt-1 text-sm">Selected: {rating}</p>
//                     </div>

//                     {/* COMMENT */}
//                     <input
//                         type="text"
//                         placeholder="Write your review..."
//                         value={comment}
//                         onChange={(e) => setComment(e.target.value)}
//                         className="border p-2 rounded w-full mt-2 text-sm sm:text-base"
//                     />

//                     {/* SUBMIT */}
//                     <button
//                         onClick={submitReview}
//                         className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
//                     >
//                         Submit Review ✍️
//                     </button>

//                 </div>
//             </div>

//             {/* REVIEWS */}
//             <div className="max-w-6xl mx-auto mt-8 sm:mt-10 px-1">

//                 <h2 className="text-lg sm:text-xl font-bold mb-3">Reviews</h2>

//                 {product.reviews?.length === 0 && (
//                     <p className="text-sm text-gray-400">No reviews yet</p>
//                 )}

//                 <div className="space-y-3">
//                     {product.reviews?.map((rev, index) => (
//                         <div key={index} className="border-b pb-2">
//                             <p className="text-pink-500 text-sm">⭐ {rev.rating}</p>
//                             <p className="text-sm">{rev.comment}</p>
//                         </div>
//                     ))}
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default ProductDetails;


import { toast } from "react-toastify";
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { CartContext } from "../context/CartContext";
import Rating from "../components/Rating";

const ProductDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const { addToCart, cart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await API.get(`/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (!userInfo) {
            toast.error("Please login first 😢");
            navigate("/login");
            return;
        }

        addToCart(product); // 🔥 bas ye hi kaafi hai
    };

    const submitReview = async () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (!userInfo) {
            toast.error("Login required 😢");
            navigate("/login");
            return;
        }

        const token = userInfo.token;

        if (!rating || !comment) {
            toast.error("Please add rating & comment ⭐");
            return;
        }

        try {
            await API.post(
                `/products/${id}/review`,
                { rating, comment },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success("Review submitted 🎉");

            setRating(0);
            setComment("");

            const res = await API.get(`/products/${id}`);
            setProduct(res.data);

        } catch (error) {
            toast.error("Error submitting review ❌");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white py-8 px-4">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 
            backdrop-blur-xl bg-white/60 border border-white/30 rounded-3xl shadow-2xl p-6">

                {/* IMAGE */}
                <div className="flex justify-center items-center bg-white/70 backdrop-blur-md p-6 rounded-2xl">
                    <img
                        src={`http://localhost:5000/images/${product.image?.split("/").pop()}`}
                        alt={product.name}
                        className="w-64 h-64 object-contain rounded-lg"
                    />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col gap-4">

                    <h1 className="text-2xl md:text-3xl font-bold 
                    bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-2">
                        <Rating value={product.rating || 0} />
                        <span className="text-gray-500 text-sm">
                            ({product.numReviews || 0} reviews)
                        </span>
                    </div>

                    <p className="text-gray-600">
                        {product.description}
                    </p>

                    <h2 className="text-2xl font-bold text-pink-500">
                        ₹{product.price}
                    </h2>

                    {/* ADD TO CART */}
                    <button
                        onClick={handleAddToCart}
                        className="w-full sm:w-fit px-6 py-2 rounded-xl text-white font-semibold
                        bg-gradient-to-r from-pink-500 to-purple-600 
                        hover:scale-105 transition shadow-md"
                    >
                        🛒 Add To Cart
                    </button>

                    {/* RATING */}
                    <div className="mt-4">
                        <h3 className="font-semibold">Your Rating:</h3>

                        <div className="flex gap-2 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={`text-2xl transition 
                                    ${rating >= star ? "text-pink-500 scale-110" : "text-gray-300"}`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* COMMENT */}
                    <textarea
                        placeholder="Write your review..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                        className="border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                    />

                    {/* SUBMIT */}
                    <button
                        onClick={submitReview}
                        className="w-full sm:w-fit px-6 py-2 rounded-xl text-white font-semibold
                        bg-gradient-to-r from-purple-500 to-pink-500 
                        hover:scale-105 transition shadow-md"
                    >
                        Submit Review ✍️
                    </button>

                </div>
            </div>

            {/* REVIEWS */}
            <div className="max-w-6xl mx-auto mt-10">

                <h2 className="text-xl font-bold mb-4 text-purple-700">
                    Reviews 💬
                </h2>

                {product.reviews?.length === 0 ? (
                    <p className="text-gray-400">No reviews yet 😔</p>
                ) : (
                    <div className="space-y-4">
                        {product.reviews?.map((rev, index) => (
                            <div key={index}
                                className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow">

                                <p className="text-pink-500 font-semibold">
                                    ⭐ {rev.rating}
                                </p>

                                <p className="text-gray-700">
                                    {rev.comment}
                                </p>

                            </div>
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
};

export default ProductDetails;