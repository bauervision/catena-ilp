import React from "react";

export function MenuItems() {
  return (
    <div className="w-full md:w-auto animate-fadeIn">
      <ul className="md:space-x-20 flex flex-row text-lg rounded items-center justify-center">
        {/* <li className="py-2 px-3 hover:bg-gray-600 cursor-pointer rounded  text-white ">
          Table
        </li> */}

        <li
          className="py-2 px-3 hover:bg-gray-600 cursor-pointer rounded button-29 text-white "
          onClick={() =>
            document
              .getElementById("video")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Video
        </li>

        <li
          className="py-2 px-3 hover:bg-gray-600 cursor-pointer rounded button-29 text-white "
          onClick={() =>
            document
              .getElementById("map")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Map
        </li>
      </ul>
    </div>
  );
}
