const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white py-10 px-4">

            <div className="max-w-6xl mx-auto">

                {/* HEADING */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-10 
                bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                    About ShopEasy 🛍️
                </h1>

                {/* MAIN GLASS CARD */}
                <div className="backdrop-blur-lg bg-white/60 border border-white/30 
                shadow-2xl rounded-3xl p-6 md:p-10">

                    {/* INTRO */}
                    <p className="text-gray-700 text-base md:text-xl leading-relaxed text-center mb-6">
                        Welcome to <span className="font-semibold text-purple-600">ShopEasy</span> —
                        your one-stop destination for fashion, electronics, and lifestyle products.
                    </p>

                    <p className="text-gray-600 text-center text-sm md:text-lg mb-10">
                        We believe shopping should be 
                        <span className="text-pink-500 font-semibold"> simple, fast, and fun</span>.
                    </p>

                    {/* FEATURES */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl text-center 
                        shadow hover:scale-105 hover:shadow-pink-300 transition duration-300">
                            <h3 className="text-xl font-bold text-purple-700 mb-2">🚀 Fast Delivery</h3>
                            <p className="text-gray-600 text-sm">
                                Get your products delivered quickly and safely to your doorstep.
                            </p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl text-center 
                        shadow hover:scale-105 hover:shadow-pink-300 transition duration-300">
                            <h3 className="text-xl font-bold text-pink-500 mb-2">💎 Quality Products</h3>
                            <p className="text-gray-600 text-sm">
                                We ensure top quality items at the best prices.
                            </p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl text-center 
                        shadow hover:scale-105 hover:shadow-pink-300 transition duration-300">
                            <h3 className="text-xl font-bold text-purple-700 mb-2">❤️ Customer First</h3>
                            <p className="text-gray-600 text-sm">
                                Your satisfaction is our top priority.
                            </p>
                        </div>

                    </div>

                    {/* WHY CHOOSE US */}
                    <div className="mt-12 text-center">

                        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">
                            Why Choose Us?
                        </h2>

                        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
                            At ShopEasy, we combine style, technology, and convenience to deliver
                            an unmatched shopping experience. From trending fashion to latest gadgets —
                            we’ve got everything you need.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;