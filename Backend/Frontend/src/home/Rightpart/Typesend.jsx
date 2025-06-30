// import React, { useState } from "react";
// import { IoSend } from "react-icons/io5";
// import useSendMessage from "../../context/useSendMessage.js";

// function Typesend() {
//   const [message, setMessage] = useState("");
//   const { loading, sendMessages } = useSendMessage();

//   const handleSubmit = async (e) => {
//     console.log(e);
//     e.preventDefault();
//     await sendMessages(message);
//     setMessage("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex space-x-1 h-[8vh]  bg-gray-800">
//         <div className=" w-[70%] mx-4">
//           <input
//             type="text"
//             placeholder="Type here"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="border-[1px] border-gray-700  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1"
//           />
//         </div>
//         <button>
//           <IoSend className="text-3xl" />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Typesend;
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-2">
      <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-700 via-indigo-800 to-purple-900 px-4 py-3 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-transparent border border-indigo-600 text-white placeholder-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          disabled={loading || message.trim() === ""}
          className="text-white hover:text-yellow-300 transition-transform transform hover:scale-110"
        >
          <IoSend className="text-3xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
