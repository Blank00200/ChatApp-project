import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full lg:w-80 bg-black text-gray-300 flex flex-col h-screen">
      {/* Search Section */}
      <div className="p-4">
        <Search />
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto p-2">
        <Users />
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-700">
        <Logout />
      </div>
    </div>
  );
}

export default Left;
