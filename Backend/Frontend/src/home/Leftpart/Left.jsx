// import React from "react";
// import Search from "./Search";
// import Users from "./Users";
 

// function Left() {
//   return (
//     <div className="w-[30%] bg-black text-gray-300">
//       <h1 className="font-bold text-3xl p-2 px-11">Jumping Mind</h1>
//     {/* <div className="w-full   bg-black text-gray-300"> */}
//       <Search />
//       <div
//         className=" flex-1  overflow-y-auto"
//         style={{ minHeight: "calc(84vh - 10vh)" }}
//       >
//         <Users />
//       </div>
   
//     </div>
  
//   );
// }

// export default Left;
import React from "react";
import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <div className="w-[30%] text-gray-300 flex flex-col bg-gradient-to-b from-[#1a152e] to-[#221b3c] shadow-lg">
      <h1 className="text-3xl font-bold px-6 py-4 text-white tracking-wide border-b border-purple-800">
        Jumping Mind
      </h1>
      <Search />
      <div className="flex-1 overflow-y-auto">
        <Users />
      </div>
    </div>
  );
}

export default Left;
