// // import React, { useEffect } from "react";
// // import Chatuser from "./Chatuser";
// // import Messages from "./Messages";
// // import Typesend from "./Typesend";
// // import useConversation from "../../statemanage/useConversation.js";
// // import { useAuth } from "../../context/AuthProvider.jsx";
// // import { CiMenuFries } from "react-icons/ci";

// // function Right() {
// //   const { selectedConversation, setSelectedConversation } = useConversation();
// //   useEffect(() => {
// //     return setSelectedConversation(null);
// //   }, [setSelectedConversation]);
// //   return (
// //     <div className="w-full bg-slate-900 text-gray-300">
// //       <div>
// //         {!selectedConversation ? (
// //           <NoChatSelected />
// //         ) : (
// //           <>
// //             <Chatuser />
// //             <div
// //               className=" flex-1 overflow-y-auto"
// //               style={{ maxHeight: "calc(88vh - 8vh)" }}
// //             >
// //               <Messages />
// //             </div>
// //             <Typesend />
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Right;

// // const NoChatSelected = () => {
// //   const [authUser] = useAuth();
// //   console.log(authUser);
// //   return (
// //     <>
// //       <div className="relative">
// //         <label
// //           htmlFor="my-drawer-2"
// //           className="btn btn-ghost drawer-button lg:hidden absolute left-5"
// //         >
// //           <CiMenuFries className="text-white text-xl" />
// //         </label>
// //         <div className="flex h-screen items-center justify-center">
// //           <h1 className="text-center">
// //             Welcome{" "}
// //             <span className="font-semibold text-xl">
// //               {authUser.user.fullname}
// //             </span>
// //             <br />
// //             No chat selected, please start conversation by selecting anyone to
// //             your contacts
// //           </h1>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// import React, { useEffect } from "react";
// import Chatuser from "./Chatuser";
// import Messages from "./Messages";
// import Typesend from "./Typesend";
// import useConversation from "../../statemanage/useConversation.js";
// import { useAuth } from "../../context/AuthProvider.jsx";
// import { CiMenuFries } from "react-icons/ci";

// function Right() {
//   const { selectedConversation, setSelectedConversation } = useConversation();

//   useEffect(() => {
//     return setSelectedConversation(null);
//   }, [setSelectedConversation]);

//   return (
//     <div className="w-full bg-slate-900 text-gray-300 flex flex-col h-screen">
//       {!selectedConversation ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           <Chatuser />
//           <div className="flex-1 overflow-y-auto" style={{ maxHeight: "calc(88vh - 8vh)" }}>
//             <Messages />
//           </div>
//           <Typesend />
//         </>
//       )}
//     </div>
//   );
// }

// export default Right;

// const NoChatSelected = () => {
//   const [authUser] = useAuth();

//   return (
//     <div className="relative h-full w-full">
//       {/* Hamburger for mobile */}
//       <label
//         htmlFor="my-drawer-2"
//         className="btn btn-ghost drawer-button lg:hidden absolute top-5 left-5 z-10"
//       >
//         <CiMenuFries className="text-white text-2xl animate-pulse" />
//       </label>

//       {/* Welcome Card */}
//       <div className="flex items-center justify-center h-full px-4">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white text-center max-w-md w-full animate-fade-in">
//           <h1 className="text-2xl font-bold mb-2">
//             Welcome, <span className="text-yellow-300">{authUser.user.fullname}</span>
//           </h1>
//           <p className="text-sm sm:text-base text-white/90 leading-relaxed">
//             You haven’t selected any conversation yet.
//             <br />
//             Please choose a contact from the list to start chatting!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-purple-950 text-gray-300 flex flex-col relative">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Chatuser />

          {/* Message area with hidden scrollbar */}
          <div
            className="flex-1 overflow-y-auto px-4 pt-2"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-2 h-full overflow-y-auto shadow-md"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <Messages />
            </div>
          </div>

          {/* Send Message input */}
          <div className="bg-white/10 backdrop-blur-md rounded-t-xl shadow-inner">
            <Typesend />
          </div>
        </>
      )}
    </div>
  );
}

export default Right;

// Fallback screen when no conversation is selected
const NoChatSelected = () => {
  const [authUser] = useAuth();

  return (
    <div className="relative h-full w-full">
      {/* Hamburger for mobile */}
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute top-5 left-5 z-10"
      >
        <CiMenuFries className="text-white text-2xl animate-pulse" />
      </label>

      {/* Welcome Card */}
      <div className="flex items-center justify-center h-full px-4">
        <div className="bg-gradient-to-br from-indigo-700 to-purple-700 p-8 rounded-2xl shadow-xl text-white text-center max-w-md w-full animate-fade-in">
          <h1 className="text-2xl font-bold mb-2">
            Welcome, <span className="text-yellow-300">{authUser.user.fullname}</span>
          </h1>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            No chat selected yet.
            <br />
            Choose a contact from the list to start chatting!
          </p>
        </div>
      </div>
    </div>
  );
};
