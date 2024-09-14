import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

function Typesend() {
  return (
    <div className="flex space-x-1 h-[8vh] bg-gray-800">
        <div className="w-[70%] mx-4">
        <input type="text" placeholder="Type here" className="border border-gray-700 outline-none rounded-xl mt-3 px-4 py-3 w-full" />
        </div>
        <button>
        <RiSendPlaneFill className="text-4xl mb-1" />
        </button>
    </div>
  )
}

export default Typesend