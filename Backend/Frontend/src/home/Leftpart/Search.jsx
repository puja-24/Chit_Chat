// // import React, { useState } from "react";
// // import { FaSearch } from "react-icons/fa";
// // import useGetAllUsers from "../../context/useGetAllUsers";
// // import useConversation from "../../statemanage/useConversation";
// // import toast from "react-hot-toast";
// // function Search() {
// //   const [search, setSearch] = useState("");
// //   const [allUsers] = useGetAllUsers();
// //   const { setSelectedConversation } = useConversation();
// //   console.log(allUsers);
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!search) return;
// //     const conversation = allUsers.find((user) =>
// //       user.fullname?.toLowerCase().includes(search.toLowerCase())
// //     );
// //     if (conversation) {
// //       setSelectedConversation(conversation);
// //       setSearch("");
// //     } else {
// //       toast.error("User not found");
// //     }
// //   };
// //   return (
// //     <div className=" h-[10vh]">
// //       <div className="px-6 py-4">
// //         <form onSubmit={handleSubmit}>
// //           <div className="flex space-x-3">
// //             <label className=" border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
// //               <input
// //                 type="text"
// //                 className="grow outline-none bg-transparent"
// //                 placeholder="Search"
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //               />
// //             </label>
// //             <button>
// //               <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Search;
// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import useGetAllUsers from "../../context/useGetAllUsers";
// import useConversation from "../../statemanage/useConversation";
// import toast from "react-hot-toast";

// function Search() {
//   const [search, setSearch] = useState("");
//   const [allUsers] = useGetAllUsers();
//   const { setSelectedConversation } = useConversation();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!search.trim()) return;
//     const conversation = allUsers.find((user) =>
//       user.fullname?.toLowerCase().includes(search.toLowerCase())
//     );
//     if (conversation) {
//       setSelectedConversation(conversation);
//       setSearch("");
//     } else {
//       toast.error("User not found");
//     }
//   };

//   return (
//     <div className="h-[10vh] px-6 py-4 bg-slate-900">
//       <form onSubmit={handleSubmit}>
//         <div className="flex items-center gap-3">
//           {/* Search Input Field */}
//           <div className="flex items-center w-full bg-slate-800 rounded-full px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-blue-500">
//             <FaSearch className="text-gray-400 text-lg mr-2" />
//             <input
//               type="text"
//               className="bg-transparent w-full text-white outline-none placeholder-gray-400"
//               placeholder="Search users..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition duration-200"
//           >
//             Go
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Search;
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../statemanage/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh] px-6 py-4 bg-gradient-to-r from-[#1f1b2e] via-[#2d2146] to-[#1f1b2e] shadow-md border-b border-purple-900">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="flex items-center w-full bg-[#2a2340] rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 shadow-inner">
            <FaSearch className="text-purple-300 text-lg mr-2" />
            <input
              type="text"
              className="bg-transparent w-full text-white placeholder-purple-300 outline-none"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-2 rounded-full font-medium transition duration-200 shadow-sm"
          >
            Go
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
