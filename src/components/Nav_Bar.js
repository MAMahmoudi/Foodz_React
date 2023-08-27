import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";

const Nav_Bar = () => {
  const { Side_Nav, Set_Side_Nav } = useState(false);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => Set_Side_Nav(!Side_Nav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Foo
          <span>DZ</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Foo
          </p>
          <p className="p-2 text-bold">DZ</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-gray-200 p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search meals"
        />
      </div>
      <button className="hidden lg:flex md:flex  items-center bg-orange-700 text-white   py-2 rounded-full">
        <BsFillCartFill size={20} />
        Cart
      </button>
    </div>
  );
};

export default Nav_Bar;
