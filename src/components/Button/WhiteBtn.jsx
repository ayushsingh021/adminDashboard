import React from "react";
import { IoMdAdd } from "react-icons/io";

function WhiteBtn({text}) {
  return (
    <button
      type="button"
      class=" text-black text-lg font-normal   shadow-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-white dark:hover:bg-white-700 dark:focus:ring-blue-300"
    >
      <div className="flex bg-transparent items-center">
        <IoMdAdd className="text-xl text-black mr-2 bg-transparent" />
        {text}
      </div>
    </button>
  );
}

export default WhiteBtn;
