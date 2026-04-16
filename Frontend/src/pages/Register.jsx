// import { toast } from "react-toastify";
// import { useState } from "react";
// import API from "../services/api";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {

//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.password) {
//       toast.error("Fill all fields ❌");
//       return;
//     }

//     setLoading(true);

//     try {
//       await API.post("/users/register", form);

//       toast.success("Register Success 💖");

//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);

//     } catch (error) {
//       toast.error("Register Failed ❌");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center 
//     bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-6 px-3 sm:px-6">

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white/80 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl 
//         shadow-xl sm:shadow-2xl w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-5 border border-white/40"
//       >

//         <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center 
//         bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
//           Create Account 💖
//         </h2>

//         {/* NAME */}
//         <input
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-2.5 sm:p-3 text-sm sm:text-base border rounded-lg focus:outline-none 
//           focus:ring-2 focus:ring-pink-400 shadow-sm"
//         />

//         {/* EMAIL */}
//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full p-2.5 sm:p-3 text-sm sm:text-base border rounded-lg focus:outline-none 
//           focus:ring-2 focus:ring-purple-400 shadow-sm"
//         />

//         {/* PASSWORD */}
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full p-2.5 sm:p-3 text-sm sm:text-base border rounded-lg focus:outline-none 
//           focus:ring-2 focus:ring-blue-400 shadow-sm"
//         />

//         {/* BUTTON */}
//         <button
//           disabled={loading}
//           className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-white
//           ${loading
//               ? "bg-gray-400"
//               : "bg-gradient-to-r from-pink-500 to-purple-500"
//             }`}
//         >
//           {loading ? "Creating..." : "Register 🚀"}
//         </button>

//         {/* LOGIN LINK */}
//         <p className="text-center text-xs sm:text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link to="/login" className="text-pink-500 font-semibold">
//             Login
//           </Link>
//         </p>

//       </form>
//     </div>
//   );
// };

// export default Register;


import { toast } from "react-toastify";
import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("Fill all fields ❌");
      return;
    }

    setLoading(true);

    try {
      await API.post("/users/register", form);

      toast.success("Register Success 💖");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      toast.error("Register Failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* LEFT (same as login) */}
      <div className="hidden md:flex md:w-1/2 
      bg-gradient-to-br from-pink-500 to-purple-600 
      text-white items-center justify-center flex-col p-8">

        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-center">
          Join ShopEasy 💖
        </h1>

        <p className="text-sm lg:text-lg opacity-90 text-center max-w-md">
          Create your account and start shopping amazing products today!
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full md:w-1/2 justify-center items-center 
      bg-gradient-to-br from-purple-100 via-pink-100 to-white py-6 px-4">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md backdrop-blur-lg bg-white/70 
          border border-white/30 p-6 md:p-8 rounded-3xl 
          shadow-xl hover:shadow-pink-300 transition duration-300 space-y-5"
        >

          <h2 className="text-2xl md:text-3xl font-extrabold text-center 
          bg-gradient-to-r from-pink-500 to-purple-600 
          text-transparent bg-clip-text">
            Create Account 🚀
          </h2>

          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-500 font-semibold">
              Login
            </Link>
          </p>

          {/* NAME */}
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl 
            focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* EMAIL */}
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl 
            focus:ring-2 focus:ring-purple-400 outline-none"
          />

          {/* PASSWORD */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl 
            focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* BUTTON */}
          <button
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold transition
            ${loading
                ? "bg-gray-400"
                : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105"
              }`}
          >
            {loading ? "Creating..." : "Register 🚀"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;