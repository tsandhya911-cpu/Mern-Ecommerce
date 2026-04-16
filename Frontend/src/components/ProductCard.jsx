// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import Rating from "./Rating";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const ProductCard = ({ product }) => {

//     const navigate = useNavigate();
//     const { addToCart, cart } = useContext(CartContext);

//     const handleAddToCart = (e) => {
//         e.stopPropagation();

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

//         // ❌ REMOVE AUTO NAVIGATION (better UX)
//         // navigate(`/product/${product._id}`);
//     };

//     const handleOpenDetails = () => {
//         navigate(`/product/${product._id}`);
//     };

//     return (
//         <div
//             onClick={handleOpenDetails}
//             className="group bg-white/70 backdrop-blur-lg border border-white/30 
//             shadow-md sm:shadow-lg rounded-xl sm:rounded-2xl overflow-hidden 
//             hover:shadow-pink-500/40 hover:-translate-y-1 sm:hover:-translate-y-2 
//             transition-all duration-300 cursor-pointer"
//         >

//             {/* IMAGE */}
//             <div className="w-full h-40 sm:h-48 md:h-56 bg-purple-100 flex items-center justify-center overflow-hidden">
//                 <img
//                     src={`http://localhost:5000/images/${product.image?.replace("/images/", "")}`}
//                     alt={product.name}
//                     className="max-h-full max-w-full object-contain 
//   group-hover:scale-105 sm:group-hover:scale-110 transition duration-300"
//                 />
//             </div>

//             {/* CONTENT */}
//             <div className="p-3 sm:p-4 space-y-1 sm:space-y-2">

//                 <h2 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-pink-500 transition line-clamp-2">
//                     {product.name}
//                 </h2>

//                 {/* ⭐ Rating */}
//                 <div className="flex items-center gap-1 sm:gap-2">
//                     <Rating value={product.rating || 0} />
//                     {product.numReviews > 0 && (
//                         <span className="text-[10px] sm:text-xs text-gray-500">
//                             ({product.numReviews})
//                         </span>
//                     )}
//                 </div>

//                 <p className="text-gray-500 text-[11px] sm:text-xs line-clamp-2">
//                     {product.description}
//                 </p>

//                 <p className="text-pink-500 font-bold text-sm sm:text-lg">
//                     ₹{product.price}
//                 </p>

//                 {/* BUTTON */}
//                 <button
//                     onClick={handleAddToCart}
//                     className="w-full mt-2 sm:mt-3 text-xs sm:text-sm bg-gradient-to-r from-pink-500 to-purple-500 
//                     text-white py-1.5 sm:py-2 rounded-lg font-semibold 
//                     hover:opacity-90 transition"
//                 >
//                     🛒 Add to Cart
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default ProductCard;

// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import Rating from "./Rating";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const ProductCard = ({ product }) => {

//     const navigate = useNavigate();
//     const { addToCart, cart } = useContext(CartContext);

//     const handleAddToCart = (e) => {
//         e.stopPropagation();

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

//     const handleOpenDetails = () => {
//         navigate(`/product/${product._id}`);
//     };

//     return (
//         <div
//             onClick={handleOpenDetails}
//             className="group relative bg-white/60 backdrop-blur-lg border border-white/30 
//             rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-400/40 
//             hover:-translate-y-2 transition-all duration-300 cursor-pointer"
//         >

//             {/* IMAGE */}
//             <div className="w-full h-44 sm:h-52 md:h-56 bg-gradient-to-br from-purple-100 to-pink-100 
//             flex items-center justify-center overflow-hidden">

//                 <img
//                     src={`http://localhost:5000/images/${product.image?.replace("/images/", "")}`}
//                     alt={product.name}
//                     className="max-h-full max-w-full object-contain 
//                     group-hover:scale-110 transition duration-300"
//                 />

//                 {/* 🔥 HOVER OVERLAY */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
//             </div>

//             {/* CONTENT */}
//             <div className="p-4 space-y-2">

//                 <h2 className="text-sm md:text-base font-semibold text-gray-800 
//                 group-hover:text-pink-500 transition line-clamp-2">
//                     {product.name}
//                 </h2>

//                 {/* ⭐ Rating */}
//                 <div className="flex items-center gap-2">
//                     <Rating value={product.rating || 0} />
//                     {product.numReviews > 0 && (
//                         <span className="text-xs text-gray-500">
//                             ({product.numReviews})
//                         </span>
//                     )}
//                 </div>

//                 <p className="text-xs text-gray-500 line-clamp-2">
//                     {product.description}
//                 </p>

//                 <div className="flex items-center justify-between">

//                     <p className="text-pink-500 font-bold text-base md:text-lg">
//                         ₹{product.price}
//                     </p>

//                     {/* SMALL TAG */}
//                     <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
//                         New
//                     </span>

//                 </div>

//              //   BUTTON //
//                 <button
//                     onClick={handleAddToCart}
//                     className="w-full mt-2 text-sm bg-gradient-to-r from-pink-500 to-purple-600 
//                     text-white py-2 rounded-xl font-semibold 
//                     hover:scale-105 transition"
//                 >
//                     🛒 Add to Cart
//                 </button>



//             </div>
//         </div>
//     );
// };

// export default ProductCard;

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {

    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (e) => {
        e.stopPropagation();

        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (!userInfo) {
            toast.error("Please login first 😢");
            navigate("/login");
            return;
        }

        // ✅ ONLY ONE RESPONSIBILITY
        addToCart(product);
    };

    const handleOpenDetails = () => {
        navigate(`/product/${product._id}`);
    };

    return (
        <div
            onClick={handleOpenDetails}
            className="group relative bg-white/60 backdrop-blur-lg border border-white/30 
            rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-400/40 
            hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >

            {/* IMAGE */}
            <div className="w-full h-44 sm:h-52 md:h-56 bg-gradient-to-br from-purple-100 to-pink-100 
            flex items-center justify-center overflow-hidden">

                <img
                    src={`http://localhost:5000/images/${product.image?.replace("/images/", "")}`}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain 
                    group-hover:scale-110 transition duration-300"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-2">

                <h2 className="text-sm md:text-base font-semibold text-gray-800 
                group-hover:text-pink-500 transition line-clamp-2">
                    {product.name}
                </h2>

                {/* ⭐ Rating */}
                <div className="flex items-center gap-2">
                    <Rating value={product.rating || 0} />
                    {product.numReviews > 0 && (
                        <span className="text-xs text-gray-500">
                            ({product.numReviews})
                        </span>
                    )}
                </div>

                <p className="text-xs text-gray-500 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">

                    <p className="text-pink-500 font-bold text-base md:text-lg">
                        ₹{product.price}
                    </p>

                    <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                        New
                    </span>

                </div>

                {/* BUTTON */}
                <button
                    onClick={handleAddToCart}
                    className="w-full mt-2 text-sm bg-gradient-to-r from-pink-500 to-purple-600 
                    text-white py-2 rounded-xl font-semibold 
                    hover:scale-105 transition"
                >
                    🛒 Add to Cart
                </button>

            </div>
        </div>
    );
};

export default ProductCard;