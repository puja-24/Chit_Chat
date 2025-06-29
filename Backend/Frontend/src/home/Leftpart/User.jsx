import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { socket, onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        {/* Avatar + Online Dot */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://th.bing.com/th/id/OIP.CjCvf9FW545kw2IJpAlflgHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
              alt="user avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></span>
          )}
        </div>

        {/* User Info */}
        <div>
          <h1 className="font-bold-sm">{user.fullname}</h1>
          {/* <span className="text-sm text-gray-300">{user.email}</span> */}
        </div>
      </div>
    </div>
  );
}

export default User;
