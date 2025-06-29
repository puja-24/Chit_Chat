// import React from "react";
// import useConversation from "../../statemanage/useConversation.js";
// import { useSocketContext } from "../../context/SocketContext.jsx";
// import { CiMenuFries } from "react-icons/ci";

// function Chatuser() {
//   const { selectedConversation } = useConversation();
//   const { onlineUsers } = useSocketContext();
//   const getOnlineUsersStatus = (userId) => {
//     return onlineUsers.includes(userId) ? "Online" : "Offline";
//   };

//   return (
//     <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
//       <div>
//         <div className="avatar online">
//           <div className="w-14 rounded-full">
//             <img src="https://th.bing.com/th/id/OIP.CjCvf9FW545kw2IJpAlflgHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"/>
//           </div>
//         </div>
//       </div>
//       <div>
//         <h1 className="text-xl">{selectedConversation.name}</h1>
//         <span className="text-sm">
//           {getOnlineUsersStatus(selectedConversation._id)}
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Chatuser;
import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700">
      {/* Menu Icon for mobile (optional if drawer used) */}
      <label htmlFor="my-drawer-2" className="lg:hidden block">
        <CiMenuFries className="text-white text-2xl cursor-pointer" />
      </label>

      {/* Avatar + Info */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src="https://th.bing.com/th/id/OIP.CjCvf9FW545kw2IJpAlflgHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border border-slate-600 object-cover"
          />
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-md"></span>
          )}
        </div>
        <div>
          <h1 className="text-white font-semibold text-lg">{selectedConversation?.fullname}</h1>
          <p className={`text-sm ${isOnline ? "text-green-400" : "text-gray-400"}`}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
