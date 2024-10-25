import React from "react";
import useConversation from "../../zustand/useConversation.js";

function Chatuser() {
  const { selectedConversation } = useConversation();
  
  // Ensure selectedConversation is an object and has the fullname property
  const userFullName = selectedConversation ? selectedConversation.fullname : 'Unknown User';
  
  return (
    <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">{userFullName}</h1>
        <span className="text-sm">Offline</span>
      </div>
    </div>
  );
}

export default Chatuser;
