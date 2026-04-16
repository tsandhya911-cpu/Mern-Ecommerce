// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../services/api";

// const Profile = () => {
//     const [user, setUser] = useState(null);
//     const [image, setImage] = useState(null);
//     const [edit, setEdit] = useState(false);
//     const [newName, setNewName] = useState("");
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem("userInfo"));
//         const storedImage = localStorage.getItem("profilePic");

//         setUser(storedUser);
//         setImage(storedImage);
//     }, []);

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setImage(reader.result);
//             localStorage.setItem("profilePic", reader.result);
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleLogout = () => {
//         localStorage.clear();
//         toast.info("Logged out 👋");
//         navigate("/login");
//         window.location.reload();
//     };

//     const handleUpdateProfile = async () => {
//         setLoading(true);

//         try {
//             const res = await API.put("/users/profile", {
//                 name: newName || user.name,
//                 email: user.email,
//                 profilePic: image
//             });

//             localStorage.setItem("userInfo", JSON.stringify(res.data));
//             setUser(res.data);
//             setEdit(false);

//             toast.success("Profile Updated 🎉");

//         } catch (error) {
//             toast.error("Update Failed ❌");
//         }

//         setLoading(false);
//     };

//     if (!user) {
//         return (
//             <div className="min-h-screen flex items-center justify-center text-gray-500 text-sm sm:text-lg">
//                 Please login first 😔
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center 
//         bg-gradient-to-br from-purple-200 via-pink-100 to-purple-200 py-6 px-3 sm:px-6">

//             <div className="bg-white/80 backdrop-blur-xl shadow-xl sm:shadow-2xl 
//             rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md text-center border border-white/40">

//                 {/* IMAGE */}
//                 <div className="relative w-fit mx-auto group">
//                     {image ? (
//                         <img
//                             src={image}
//                             className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-pink-400 
//                             shadow-xl object-cover"
//                         />
//                     ) : (
//                         <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r 
//                         from-pink-500 to-purple-500 text-white flex items-center 
//                         justify-center text-2xl sm:text-3xl md:text-4xl shadow-xl">
//                             {user.name.charAt(0)}
//                         </div>
//                     )}

//                     <label className="absolute bottom-1 right-1 bg-pink-500 text-white 
//                     p-1.5 sm:p-2 rounded-full cursor-pointer hover:bg-pink-600 shadow-lg">
//                         📷
//                         <input type="file" onChange={handleImageUpload} hidden />
//                     </label>
//                 </div>

//                 {/* NAME */}
//                 {edit ? (
//                     <input
//                         value={newName}
//                         onChange={(e) => setNewName(e.target.value)}
//                         className="border border-purple-300 focus:ring-2 
//                         focus:ring-pink-400 outline-none p-2 mt-4 w-full rounded-lg text-sm sm:text-base"
//                     />
//                 ) : (
//                     <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-purple-700">
//                         {user.name}
//                     </h1>
//                 )}

//                 {/* EMAIL */}
//                 <p className="text-gray-500 mt-1 text-xs sm:text-sm">{user.email}</p>

//                 {/* ACTIONS */}
//                 <div className="mt-5 flex flex-col gap-3">

//                     {!edit ? (
//                         <button
//                             onClick={() => {
//                                 setEdit(true);
//                                 setNewName(user.name);
//                             }}
//                             className="w-full py-2 sm:py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 
//                             text-white rounded-lg font-semibold"
//                         >
//                             ✏ Edit Profile
//                         </button>
//                     ) : (
//                         <button
//                             onClick={handleUpdateProfile}
//                             disabled={loading}
//                             className={`w-full py-2 sm:py-2.5 rounded-lg font-semibold text-white
//                             ${loading 
//                                 ? "bg-gray-400" 
//                                 : "bg-green-500 hover:bg-green-600"
//                             }`}
//                         >
//                             {loading ? "Saving..." : "💾 Save Changes"}
//                         </button>
//                     )}

//                     <button
//                         onClick={handleLogout}
//                         className="w-full py-2 sm:py-2.5 bg-red-500 text-white rounded-lg 
//                         font-semibold hover:bg-red-600"
//                     >
//                         🚪 Logout
//                     </button>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Profile;


import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [image, setImage] = useState(null);
    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userInfo"));
        const storedImage = localStorage.getItem("profilePic");

        setUser(storedUser);
        setImage(storedImage);
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
            localStorage.setItem("profilePic", reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleLogout = () => {
        localStorage.clear();
        toast.info("Logged out 👋");
        navigate("/login");
        window.location.reload();
    };

    const handleUpdateProfile = async () => {
        setLoading(true);

        try {
            const res = await API.put("/users/profile", {
                name: newName || user.name,
                email: user.email,
                profilePic: image
            });

            localStorage.setItem("userInfo", JSON.stringify(res.data));
            setUser(res.data);
            setEdit(false);

            toast.success("Profile Updated 🎉");

        } catch (error) {
            toast.error("Update Failed ❌");
        }

        setLoading(false);
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
                Please login first 😔
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-purple-200 via-pink-100 to-white py-10 px-4">

            <div className="backdrop-blur-lg bg-white/60 border border-white/30 
            rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-pink-300 
            transition duration-300 w-full max-w-md text-center">

                {/* IMAGE */}
                <div className="relative w-fit mx-auto group">
                    {image ? (
                        <img
                            src={image}
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full 
                            border-4 border-pink-400 shadow-xl object-cover"
                        />
                    ) : (
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full 
                        bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                        flex items-center justify-center text-3xl shadow-xl">
                            {user.name.charAt(0)}
                        </div>
                    )}

                    <label className="absolute bottom-1 right-1 bg-pink-500 text-white 
                    p-2 rounded-full cursor-pointer hover:bg-pink-600 shadow-lg">
                        📷
                        <input type="file" onChange={handleImageUpload} hidden />
                    </label>
                </div>

                {/* NAME */}
                {edit ? (
                    <input
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="mt-4 w-full p-2 rounded-lg border 
                        focus:ring-2 focus:ring-pink-400 outline-none text-center"
                    />
                ) : (
                    <h1 className="text-2xl font-bold mt-4 
                    bg-gradient-to-r from-pink-500 to-purple-600 
                    bg-clip-text text-transparent">
                        {user.name}
                    </h1>
                )}

                {/* EMAIL */}
                <p className="text-gray-500 mt-1 text-sm">{user.email}</p>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-col gap-3">

                    {!edit ? (
                        <button
                            onClick={() => {
                                setEdit(true);
                                setNewName(user.name);
                            }}
                            className="w-full py-2.5 rounded-xl text-white font-semibold 
                            bg-gradient-to-r from-pink-500 to-purple-600 
                            hover:scale-105 transition"
                        >
                            ✏ Edit Profile
                        </button>
                    ) : (
                        <button
                            onClick={handleUpdateProfile}
                            disabled={loading}
                            className={`w-full py-2.5 rounded-xl text-white font-semibold transition
                            ${loading 
                                ? "bg-gray-400" 
                                : "bg-green-500 hover:scale-105"
                            }`}
                        >
                            {loading ? "Saving..." : "💾 Save Changes"}
                        </button>
                    )}

                    <button
                        onClick={handleLogout}
                        className="w-full py-2.5 rounded-xl text-white font-semibold 
                        bg-red-500 hover:bg-red-600 transition"
                    >
                        🚪 Logout
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Profile;