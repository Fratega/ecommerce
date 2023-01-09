import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = ({ trigger }) => {
  return (
    <>
      <div className="bg-black w-[70%] h-full fixed top-0 left-0 z-20 flex items-center justify-center md:hidden">

        <div className="text-white text-2xl flex flex-col gap-5  font-thin uppercase tracking-widest">
          <Link href="/" onClick={trigger}>
            Home
          </Link>
          <Link href="/categorias" onClick={trigger}>
            Categorias
          </Link>
        </div>
      </div>

      <div className="bg-black w-[30%] h-full fixed top-0 right-0 z-20 opacity-40" onClick={trigger}></div>
    </>
  );
};

export default Navigation;
