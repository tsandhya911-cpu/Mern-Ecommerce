import { toast } from "react-toastify";
import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

    const cleanForm = {
      email: form.email.trim(),
      password: form.password.trim()
    };

    if (!cleanForm.email || !cleanForm.password) {
      toast.error("Please fill email & password ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/users/login", cleanForm);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userInfo", JSON.stringify(res.data));

      toast.success("Login Success 💖");

      navigate("/");
      window.location.reload();

    } catch (error) {
      toast.error("Login Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white flex items-center justify-center px-4">

      <div className="w-full max-w-5xl grid md:grid-cols-2 backdrop-blur-xl bg-white/60 border border-white/30 rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-pink-500 to-purple-600 text-white p-8">
          <h1 className="text-4xl font-extrabold mb-4 text-center">
            Welcome Back 💖
          </h1>
          <p className="text-lg text-center opacity-90">
            Login to continue your shopping journey
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 md:p-10">

          <h2 className="text-3xl font-bold text-center mb-2 
          bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Login
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-pink-500 font-semibold">
              Register
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 w-full border p-3 rounded-xl 
                focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-1 w-full border p-3 rounded-xl 
                focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* BUTTON */}
            <button
              disabled={loading}
              className={`w-full py-3 rounded-xl text-white font-semibold transition
              ${loading
                  ? "bg-gray-400"
                  : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 shadow-md"
                }`}
            >
              {loading ? "Logging in..." : "Login 🚀"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;