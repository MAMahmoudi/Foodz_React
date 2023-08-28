import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";

const Nav_Bar = () => {
  const [Side_Nav, Set_Side_Nav] = useState(false);
  console.log(Side_Nav);
  return (
    <div className="relative min-w-full min-h-full w-[100%] h-[100%]">
      <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <div
            onClick={() => Set_Side_Nav(!Side_Nav)}
            className="cursor-pointer"
          >
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

      <div
        className={
          Side_Nav
            ? "bg-black fixed w-full h-screen z-[999] top-0 left-0 right-0 bottom-0"
            : ""
        }
      ></div>

      <div
        className={
          Side_Nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-[999] duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-[999] duration-200 "
        }
      >
        <AiOutlineClose
          onClick={() => Set_Side_Nav(!Nav_Bar)}
          size={25}
          className="fixed top-4 right-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav_Bar;
