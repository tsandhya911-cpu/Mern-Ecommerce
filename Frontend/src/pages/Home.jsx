// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";
// import { CartContext } from "../context/CartContext";
// import Loader from "../components/Loader";
// import { toast } from "react-toastify";

// const Home = () => {
//     const [products, setProducts] = useState([]);
//     const [category, setCategory] = useState("All");
//     const [search, setSearch] = useState("");
//     const [loading, setLoading] = useState(true);

//     const { addToCart } = useContext(CartContext);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const { data } = await axios.get("http://localhost:5000/api/products");
//                 setProducts(data);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProducts();
//     }, []);

//     if (loading) return <Loader />;

//     const filteredProducts = products.filter((item) => {
//         // const matchCategory =
//         //     category === "All" ||
//         //     item.category?.toLowerCase().includes(category.toLowerCase());

//         const matchCategory =
//             category === "All" ||
//             (category === "Clothes"
//                 ? item.category?.toLowerCase() === "cloth"
//                 : item.category?.toLowerCase() === category.toLowerCase());

//         const matchSearch =
//             item.name?.toLowerCase().includes(search.toLowerCase());

//         return matchCategory && matchSearch;
//     });

//     const handleAdd = (product) => {
//         addToCart(product);
//         toast.success(`${product.name} added to cart 🛒`);
//     };

//     return (
//         <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen py-6 px-3 sm:px-6">

//             <div className="w-full max-w-7xl mx-auto">

//                 {/* 🔥 HERO */}
//                 <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 sm:p-6 md:p-10 rounded-2xl mb-6 sm:mb-10 text-center shadow-xl">
//                     <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-3">
//                         ShopEasy 🛍️
//                     </h1>
//                     <p className="text-sm sm:text-base md:text-lg opacity-90">
//                         Discover trendy products with best prices
//                     </p>
//                 </div>

//                 {/* 🔍 SEARCH */}
//                 <div className="flex justify-center mb-6 sm:mb-8">
//                     <input
//                         type="text"
//                         placeholder="Search products..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         className="w-full max-w-md sm:max-w-lg px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded-full border shadow-sm 
//                         focus:outline-none focus:ring-2 focus:ring-pink-400"
//                     />
//                 </div>

//                 {/* 🏷 CATEGORY */}
//                 <div className="flex gap-2 sm:gap-3 justify-center flex-wrap mb-6 sm:mb-10">
//                     {["All", "Footwear", "Clothes", "Electronics", "Home", "Accessories"].map((cat) => (
//                         <button
//                             key={cat}
//                             onClick={() => setCategory(cat)}
//                             className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition 
//                             ${category === cat
//                                     ? "bg-pink-500 text-white shadow-md scale-105"
//                                     : "bg-white border hover:bg-pink-100"
//                                 }`}
//                         >
//                             {cat}
//                         </button>
//                     ))}
//                 </div>

//                 {/* 🛍 PRODUCTS */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                     {filteredProducts.length > 0 ? (
//                         filteredProducts.map((product) => (
//                             <ProductCard key={product._id} product={product} handleAdd={handleAdd} />
//                         ))
//                     ) : (
//                         <p className="text-center col-span-4 text-gray-400">
//                             No products found 😔
//                         </p>
//                     )}
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Home;

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get("http://localhost:5000/api/products");
                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <Loader />;

    const filteredProducts = products.filter((item) => {
        const matchCategory =
            category === "All" ||
            (category === "Clothes"
                ? item.category?.toLowerCase() === "cloth"
                : item.category?.toLowerCase() === category.toLowerCase());

        const matchSearch =
            item.name?.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    const handleAdd = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart 🛒`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white py-8 px-4">

            <div className="max-w-7xl mx-auto">

                {/* 🔥 HERO */}
                <div className="backdrop-blur-lg bg-white/60 border border-white/30 
                rounded-3xl p-6 md:p-10 mb-10 text-center shadow-xl">

                    <h1 className="text-3xl md:text-5xl font-extrabold mb-3 
                    bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        ShopEasy 🛍️
                    </h1>

                    <p className="text-gray-600 text-sm md:text-lg">
                        Discover trendy products with best prices
                    </p>
                </div>

                {/* 🔍 SEARCH */}
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full max-w-lg px-5 py-3 rounded-full 
                        backdrop-blur-lg bg-white/70 border border-white/30 shadow-md
                        focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                {/* 🏷 CATEGORY */}
                <div className="flex gap-3 justify-center flex-wrap mb-10">

                    {["All", "Footwear", "Clothes", "Electronics", "Home", "Accessories"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm transition
                            ${category === cat
                                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md scale-105"
                                    : "backdrop-blur-lg bg-white/60 border border-white/30 hover:scale-105"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}

                </div>

                {/* 🛍 PRODUCTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                handleAdd={handleAdd}
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-4 text-gray-500 text-lg">
                            No products found 😔
                        </p>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Home;