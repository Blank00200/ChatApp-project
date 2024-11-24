import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation } = useConversation();

  useEffect(() => {
    console.log("Selected Conversation:", selectedConversation);
  }, [selectedConversation]);

  return (
    <div className="w-full bg-slate-900 text-gray-300 min-h-screen flex flex-col lg:flex-row">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex-1 flex flex-col overflow-hidden">
            <Chatuser />
            <div className="flex-1 overflow-y-auto p-2 lg:p-4">
              <Messages />
            </div>
            <div className="p-2 lg:p-4">
              <Typesend />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Drawer button for mobile */}
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5 top-4"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex flex-1 items-center justify-center px-4">
        <h1 className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl">
          Welcome{" "}
          <span className="font-semibold block text-lg sm:text-xl">
            {authUser?.user?.fullname || "Guest"}
          </span>
          No chat selected. Please select a contact to start a conversation.
        </h1>
      </div>
    </div>
  );
};
