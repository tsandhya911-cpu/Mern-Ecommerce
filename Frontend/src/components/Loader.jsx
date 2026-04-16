const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">

      {/* SPINNER */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
      border-4 border-purple-600 border-t-pink-500 
      rounded-full animate-spin mb-3 sm:mb-4"></div>

      {/* TEXT */}
      <p className="text-purple-700 font-semibold text-sm sm:text-base md:text-lg">
        Loading...
      </p>

    </div>
  );
};

export default Loader;

