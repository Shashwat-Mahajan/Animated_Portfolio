import React from 'react'
import "remixicon/fonts/remixicon.css";

const Header = () => {
  return (
    <div className="fixed w-full z-10 py-22 px-20 flex justify-end items-center">
      <button className="bg-black border-4 text-white text-xl px-6 py-3 hover:bg-gray-300 hover:text-black rounded-full">
        Hire Me!
      </button>
      <i className="ri-more-2-fill text-white text-3xl ml-3"></i>
    </div>
  );
}

export default Header
