import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../services/api";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        try {
            const res = await API.get("/contact");
            setMessages(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill all fields 😢");
            return;
        }

        setLoading(true);

        try {
            await API.post("/contact", formData);
            toast.success("Message sent 🎉");

            setFormData({ name: "", email: "", message: "" });
            fetchMessages();
        } catch (error) {
            toast.error("Something went wrong ❌");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white py-10 px-4">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

                {/* LEFT SIDE */}
                <div className="space-y-6">

                    <h1 className="text-4xl md:text-6xl font-extrabold 
                    bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                        Let's Talk 💬
                    </h1>

                    <p className="text-gray-600 text-lg">
                        We’d love to hear from you. Send your thoughts anytime!
                    </p>

                    {/* GLASS CARDS */}
                    <div className="space-y-4">

                        <div className="backdrop-blur-md bg-white/40 border border-white/30 
                        p-4 rounded-2xl shadow-lg flex items-center gap-3 hover:scale-105 transition">
                            📧 support@shopeasy.com
                        </div>

                        <div className="backdrop-blur-md bg-white/40 border border-white/30 
                        p-4 rounded-2xl shadow-lg flex items-center gap-3 hover:scale-105 transition">
                            📞 +91 98765 43210
                        </div>

                        <div className="backdrop-blur-md bg-white/40 border border-white/30 
                        p-4 rounded-2xl shadow-lg flex items-center gap-3 hover:scale-105 transition">
                            📍 India
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="backdrop-blur-lg bg-white/60 border border-white/30 
                shadow-2xl rounded-3xl p-6 md:p-8">

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="p-3 rounded-xl border bg-white/70 focus:ring-2 focus:ring-pink-400 outline-none"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="p-3 rounded-xl border bg-white/70 focus:ring-2 focus:ring-purple-400 outline-none"
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message..."
                            rows="4"
                            className="p-3 rounded-xl border bg-white/70 focus:ring-2 focus:ring-pink-400 outline-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className={`py-3 rounded-xl text-white font-semibold transition-all duration-300
                            ${loading
                                    ? "bg-gray-400"
                                    : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 hover:shadow-lg"
                                }`}
                        >
                            {loading ? "Sending..." : "Send Message 🚀"}
                        </button>

                    </form>

                    {/* MESSAGES */}
                    <div className="mt-8">
                        <h2 className="text-lg font-bold text-purple-700 mb-3">
                            My Messages 💬
                        </h2>

                        {messages.length === 0 ? (
                            <p className="text-gray-500 text-sm">
                                No messages yet 😔
                            </p>
                        ) : (
                            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">

                                {messages.map(msg => (
                                    <div
                                        key={msg._id}
                                        className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow hover:scale-[1.02] transition"
                                    >
                                        <p className="text-sm text-gray-700">
                                            {msg.message}
                                        </p>

                                        <p className="text-xs text-gray-400 mt-2 text-right">
                                            {new Date(msg.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        )}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contact;