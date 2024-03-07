import React from 'react'
import { GrUpdate } from "react-icons/gr";

function BlackBtn({text}) {
  return (
    <button
    type="button"
    className="text-white text-lg font-normal shadow-md bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
  >
    <div className="flex bg-transparent items-center">
      <GrUpdate className="text-xl text-white mr-2 bg-transparent" />
      {text}
    </div>
  </button>
  )
}

export default BlackBtn
