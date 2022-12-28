import React from "react";
import Image from "next/image";
import Logo from "../../Public/img/Logo.png";
import { FiAlignJustify } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="px-5 min">
      <nav className="py-10 mb-12">
        <ul className="flex items-center justify-between">
          <li className="flex">
            <a href="#">
              <Image src={Logo} alt="" className="w-[3rem]" />
            </a>
          </li>
          <li className="">
            <a href="#">
              <FiAlignJustify className="cursor-pointer text-4xl md:invisible" />
            </a>
          </li>
          <li className="invisible lg:visible">
            <a href="#">
              <p>Home</p>
            </a>
          </li>
          <li className="invisible lg:visible">
            <a href="#">
              <p>Catálogo</p>
            </a>
          </li>
          <li className="invisible lg:visible">
            <a href="#">
              <p>Contacto</p>
            </a>
          </li>
          <li className="invisible lg:visible">
            <a href="#">
              <p>Categorías</p>
            </a>
          </li>
          <li className="flex space-x-[1rem]">
            <a>
              <MdShoppingCart className="cursor-pointer text-4xl invisible lg:visible" />
            </a>
            <a href="#">
              <ImSearch className="cursor-pointer text-3xl invisible lg:visible" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
