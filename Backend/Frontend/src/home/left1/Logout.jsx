// import React, { useState } from "react";
// import { TbLogout2 } from "react-icons/tb";
// import axios from "axios";
// import Cookies from "js-cookie";
// import toast from "react-hot-toast";

// function Logout() {
//   const [loading, setLoading] = useState(false);
//   const handleLogout = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post("/api/user/logout");
//       localStorage.removeItem("ChatApp");
//       Cookies.remove("jwt");
//       setLoading(false);
//       toast.success("Logged out successfully");
//       window.location.reload();
//     } catch (error) {
//       console.log("Error in Logout", error);
//       toast.error("Error in logging out");
//     }
//   };
//   return (
//     <>
//       <div className="w-[4%]   bg-slate-950 text-white  flex flex-col justify-end ">
//         <div className="p-3  align-bottom ">
//           <button>
//             <TbLogout2
//               className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300"
//               onClick={handleLogout}
//             />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Logout;
import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error in Logout", error);
      toast.error("Error in logging out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[4%] min-h-screen bg-slate-950 text-white flex flex-col items-center justify-end pb-6">
      <button
        onClick={handleLogout}
        className="p-2 rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
        aria-label="Logout"
        disabled={loading}
      >
        <TbLogout2 className="text-3xl" />
      </button>
    </div>
  );
}

export default Logout;
