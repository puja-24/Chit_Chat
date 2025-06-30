// // import React from "react";
// // import User from "./User";
// // import useGetAllUsers from "../../context/useGetAllUsers";

// // function Users() {
// //   const [allUsers, loading] = useGetAllUsers();
// //   console.log(allUsers);
// //   return (
// //     <div>
// //       <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
// //         Messages
// //       </h1>
// //       <div
// //         className="py-2 flex-1 overflow-y-auto"
// //         style={{ maxHeight: "calc(84vh - 10vh)" }}
// //       >
// //         {allUsers.map((user, index) => (
// //           <User key={index} user={user} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Users;
// import React from "react";
// import User from "./User";
// import useGetAllUsers from "../../context/useGetAllUsers";
// import { useSocketContext } from "../../context/SocketContext.jsx";
// import Loading from "../../components/Loading.jsx";

// function Users() {
//   const [allUsers, loading] = useGetAllUsers();
//   const { onlineUsers } = useSocketContext();

//   // Sort users by online status: online first
//   const sortedUsers = [...allUsers].sort((a, b) => {
//     const aOnline = onlineUsers.includes(a._id);
//     const bOnline = onlineUsers.includes(b._id);
//     return aOnline === bOnline ? 0 : aOnline ? -1 : 1;
//   });

//   return (
//     <div className="h-full flex flex-col">
//       <h1 className="px-6 py-3 text-lg font-semibold text-white bg-slate-800 rounded-t-md shadow">
//         Messages
//       </h1>

//       <div
//         className="flex-1 overflow-y-auto px-4 py-2 space-y-2 scrollbar-thin scrollbar-thumb-slate-700"
//         style={{ maxHeight: "calc(84vh - 10vh)" }}
//       >
//         {loading ? (
//           <Loading />
//         ) : sortedUsers.length > 0 ? (
//           sortedUsers.map((user, index) => <User key={index} user={user} />)
//         ) : (
//           <div className="text-gray-400 text-center mt-10">No users found.</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Users;
import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
import { useSocketContext } from "../../context/SocketContext.jsx";
import Loading from "../../components/Loading.jsx";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  const { onlineUsers } = useSocketContext();

  const sortedUsers = [...allUsers].sort((a, b) => {
    const aOnline = onlineUsers.includes(a._id);
    const bOnline = onlineUsers.includes(b._id);
    return aOnline === bOnline ? 0 : aOnline ? -1 : 1;
  });

  return (
    <div className="flex flex-col h-full bg-[#1a152e]">
      <h1 className="px-6 py-3 text-lg font-semibold text-purple-200 bg-[#251c3e] border-b border-purple-800">
        Messages
      </h1>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 scrollbar-thin scrollbar-thumb-slate-700">
        {loading ? (
          <Loading />
        ) : sortedUsers.length > 0 ? (
          sortedUsers.map((user, index) => <User key={index} user={user} />)
        ) : (
          <div className="text-gray-400 text-center mt-10">No users found.</div>
        )}
      </div>
    </div>
  );
}

export default Users;
