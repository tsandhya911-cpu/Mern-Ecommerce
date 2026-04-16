// import { useState } from "react";
// import { toast } from "react-toastify";
// import API from "../services/api";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: ""
//     });

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.name || !formData.email || !formData.message) {
//             toast.error("Please fill all fields 😢");
//             return;
//         }

//         setLoading(true);

//         try {
//             await API.post("/contact", formData);

//             toast.success("Message sent successfully 🎉");

//             setFormData({
//                 name: "",
//                 email: "",
//                 message: ""
//             });

//         } catch (error) {
//             toast.error("Something went wrong ❌");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 py-6 px-3 sm:px-6">

//             <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

//                 {/* LEFT */}
//                 <div className="space-y-4 sm:space-y-6 text-center md:text-left">

//                     <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold 
//                     bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//                         Contact Us 💌
//                     </h1>

//                     <p className="text-gray-600 text-sm sm:text-base md:text-lg">
//                         Have questions or feedback? We're here to help you anytime.
//                     </p>

//                     {/* INFO CARDS */}
//                     <div className="space-y-3 sm:space-y-4">

//                         <div className="bg-white p-3 sm:p-4 rounded-xl shadow flex items-center gap-3 sm:gap-4">
//                             <span className="text-xl sm:text-2xl">📧</span>
//                             <p className="text-gray-600 text-sm sm:text-base">
//                                 support@shopeasy.com
//                             </p>
//                         </div>

//                         <div className="bg-white p-3 sm:p-4 rounded-xl shadow flex items-center gap-3 sm:gap-4">
//                             <span className="text-xl sm:text-2xl">📞</span>
//                             <p className="text-gray-600 text-sm sm:text-base">
//                                 +91 98765 43210
//                             </p>
//                         </div>

//                         <div className="bg-white p-3 sm:p-4 rounded-xl shadow flex items-center gap-3 sm:gap-4">
//                             <span className="text-xl sm:text-2xl">📍</span>
//                             <p className="text-gray-600 text-sm sm:text-base">
//                                 India
//                             </p>
//                         </div>

//                     </div>

//                 </div>

//                 {/* RIGHT */}
//                 <div className="bg-white shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transition">

//                     <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">

//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Your Name"
//                             className="p-2 sm:p-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
//                         />

//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Your Email"
//                             className="p-2 sm:p-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
//                         />

//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             placeholder="Your Message..."
//                             rows="4"
//                             className="p-2 sm:p-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
//                         />

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className={`w-full py-2 sm:py-3 rounded-xl text-white font-semibold
//                             ${loading
//                                     ? "bg-gray-400"
//                                     : "bg-gradient-to-r from-pink-500 to-purple-600"
//                                 }`}
//                         >
//                             {loading ? "Sending..." : "Send Message 🚀"}
//                         </button>

//                     </form>

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Contact;


// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import API from "../services/api";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: ""
//     });

//     const [loading, setLoading] = useState(false);
//     const [messages, setMessages] = useState([]); // 🔥 NEW

//     // 🔥 FETCH USER MESSAGES
//     useEffect(() => {
//         API.get("/contact")
//             .then(res => setMessages(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.name || !formData.email || !formData.message) {
//             toast.error("Please fill all fields 😢");
//             return;
//         }

//         setLoading(true);

//         try {
//             await API.post("/contact", formData);

//             toast.success("Message sent successfully 🎉");

//             // 🔥 REFRESH MESSAGES
//             const res = await API.get("/contact");
//             setMessages(res.data);

//             setFormData({
//                 name: "",
//                 email: "",
//                 message: ""
//             });

//         } catch (error) {
//             toast.error("Something went wrong ❌");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 py-6 px-3 sm:px-6">

//             <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

//                 {/* LEFT */}
//                 <div className="space-y-4 sm:space-y-6 text-center md:text-left">

//                     <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold 
//                     bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//                         Contact Us 💌
//                     </h1>

//                     <p className="text-gray-600 text-sm sm:text-base md:text-lg">
//                         Have questions or feedback? We're here to help you anytime.
//                     </p>

//                     {/* INFO */}
//                     <div className="space-y-3 sm:space-y-4">

//                         <div className="bg-white p-3 sm:p-4 rounded-xl shadow flex items-center gap-3">
//                             📧 support@shopeasy.com
//                         </div>

//                         <div className="bg-white p-3 sm:p-4 rounded-xl shadow flex items-center gap-3">
//                             📞 +91 98765 43210
//                         </div>

//                         <div className="bg-white p-3 sm:p-4 rounded-xl shadow flex items-center gap-3">
//                             📍 India
//                         </div>

//                     </div>

//                 </div>

//                 {/* RIGHT */}
//                 <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8">

//                     {/* FORM */}
//                     <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Your Name"
//                             className="p-3 border rounded-xl focus:ring-2 focus:ring-pink-400"
//                         />

//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Your Email"
//                             className="p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
//                         />

//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             placeholder="Your Message..."
//                             rows="4"
//                             className="p-3 border rounded-xl focus:ring-2 focus:ring-pink-400"
//                         />

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className={`w-full py-3 rounded-xl text-white font-semibold
//                             ${loading
//                                     ? "bg-gray-400"
//                                     : "bg-gradient-to-r from-pink-500 to-purple-600"
//                                 }`}
//                         >
//                             {loading ? "Sending..." : "Send Message 🚀"}
//                         </button>

//                     </form>

//                     {/* 🔥 MY MESSAGES */}
//                     <div className="mt-8">
//                         <h2 className="text-lg font-bold text-purple-700 mb-3">
//                             My Messages 💬
//                         </h2>

//                         {messages.length === 0 ? (
//                             <p className="text-gray-500 text-sm">
//                                 No messages yet 😔
//                             </p>
//                         ) : (
//                             <div className="space-y-3 max-h-60 overflow-y-auto">
//                                 {messages.map(msg => (
//                                     <div key={msg._id} className="bg-purple-50 p-3 rounded-lg">
//                                         <p className="text-sm text-gray-700">
//                                             {msg.message}
//                                         </p>
//                                         <p className="text-xs text-gray-400 mt-1">
//                                             {new Date(msg.createdAt).toLocaleString()}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Contact;


// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import API from "../services/api";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: ""
//     });

//     const [loading, setLoading] = useState(false);
//     const [messages, setMessages] = useState([]);

//     // FETCH
//     const fetchMessages = async () => {
//         try {
//             const res = await API.get("/contact");
//             setMessages(res.data);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     useEffect(() => {
//         fetchMessages();
//     }, []);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.name || !formData.email || !formData.message) {
//             toast.error("Please fill all fields 😢");
//             return;
//         }

//         setLoading(true);

//         try {
//             await API.post("/contact", formData);
//             toast.success("Message sent 🎉");

//             setFormData({ name: "", email: "", message: "" });
//             fetchMessages();

//         } catch (error) {
//             toast.error("Something went wrong ❌");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 py-6 px-3 sm:px-6">

//             <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">

//                 {/* LEFT INFO SECTION */}
//                 <div className="space-y-6 text-center md:text-left">

//                     <h1 className="text-3xl md:text-5xl font-extrabold 
//                     bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//                         Contact Us 💌
//                     </h1>

//                     <p className="text-gray-600 text-sm md:text-lg">
//                         Have questions or feedback? We’re here to help you anytime.
//                     </p>

//                     {/* INFO CARDS */}
//                     <div className="space-y-4">

//                         <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3 hover:shadow-md transition">
//                             <span className="text-xl">📧</span>
//                             <p className="text-gray-600 text-sm md:text-base">
//                                 support@shopeasy.com
//                             </p>
//                         </div>

//                         <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3 hover:shadow-md transition">
//                             <span className="text-xl">📞</span>
//                             <p className="text-gray-600 text-sm md:text-base">
//                                 +91 98765 43210
//                             </p>
//                         </div>

//                         <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3 hover:shadow-md transition">
//                             <span className="text-xl">📍</span>
//                             <p className="text-gray-600 text-sm md:text-base">
//                                 India
//                             </p>
//                         </div>

//                     </div>
//                 </div>

//                 {/* RIGHT FORM */}
//                 <div className="bg-white shadow-xl rounded-2xl p-5 md:p-8">

//                     <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Your Name"
//                             className="p-3 border rounded-xl focus:ring-2 focus:ring-pink-400"
//                         />

//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Your Email"
//                             className="p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
//                         />

//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             placeholder="Your Message..."
//                             rows="4"
//                             className="p-3 border rounded-xl focus:ring-2 focus:ring-pink-400"
//                         />

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className={`py-3 rounded-xl text-white font-semibold transition
//                             ${loading
//                                     ? "bg-gray-400"
//                                     : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105"
//                                 }`}
//                         >
//                             {loading ? "Sending..." : "Send Message 🚀"}
//                         </button>

//                     </form>

//                     {/* MESSAGES */}
//                     <div className="mt-8">
//                         <h2 className="text-lg font-bold text-purple-700 mb-3">
//                             My Messages 💬
//                         </h2>

//                         {messages.length === 0 ? (
//                             <p className="text-gray-500 text-sm">
//                                 No messages yet 😔
//                             </p>
//                         ) : (
//                             <div className="space-y-4 max-h-64 overflow-y-auto pr-2">

//                                 {messages.map(msg => (
//                                     <div
//                                         key={msg._id}
//                                         className="bg-purple-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
//                                     >
//                                         <p className="text-sm text-gray-700">
//                                             {msg.message}
//                                         </p>

//                                         <p className="text-xs text-gray-400 mt-2 text-right">
//                                             {new Date(msg.createdAt).toLocaleString()}
//                                         </p>
//                                     </div>
//                                 ))}

//                             </div>
//                         )}
//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Contact;

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