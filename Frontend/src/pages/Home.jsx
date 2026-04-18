import { useContext, useEffect, useState } from "react";
import axios from "axios";
import API from "../services/api";
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
                const { data } = await API.get("/products");
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
                <div className="bg-white border border-gray-200
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
                   bg-white border border-gray-200 shadow-m 
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
                                    : "bg-white border border-gray-200 hover:scale-105"
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