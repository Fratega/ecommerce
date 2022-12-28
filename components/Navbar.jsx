import React from "react";
import { BsList } from "react-icons/bs";
import Image from "next/image";
import Logo from "/img/Logo.png";

const Navbar = () => {
  return (
    <main className="bg-white px-10 ">
        <nav className="py-10 mb-12 flex justify-between">
          <div className="">
            <Image src={Logo} width={50} height={50} />
          </div>
          <ul className="flex items-center">
            <li>
              <BsList className="cursor-pointer text-4xl " />
            </li>
          </ul>
        </nav>
    </main>
  );
}

export default Navbar;
