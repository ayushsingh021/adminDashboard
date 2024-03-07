import React from "react";
import BlackBtn from "../Button/BlackBtn";

function Namecards({ degree, no, outof }) {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-black">
          Number Of Placed Student in {degree}
        </h5>
      </a>
      <p class="mb-3 font-normal text-6xl text-gray-700">
        {no}/{outof}
      </p>
      {/* <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        See All
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a> */}
      <button
        type="button"
        className="text-white text-lg font-normal shadow-md bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        <div className="flex bg-transparent items-center">See All</div>
      </button>
    </div>
  );
}

export default Namecards;
