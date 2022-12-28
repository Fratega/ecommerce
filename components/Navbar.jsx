import React from "react";
import { BsList } from "react-icons/bs";
import Image from "next/image";
import Logo from "/Public/img/Logo.png";

const Navbar = () => {
  return (
    <header className="px-[1rem]">
        <nav className="py-10 mb-12 flex justify-between ">
          <div className="w-[4rem]">
            <Image src={Logo} alt=""/>
          </div>
          <ul className="flex items-center md:hidden">
            <li>
              <BsList className="cursor-pointer text-[3rem] " />
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Navbar;
