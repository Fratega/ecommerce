import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/img/Logo.png";
import { FiAlignJustify } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import Navigation from "./Navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const trigger = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="flex items-center justify-between p-3">
        <div className="w-[3rem]">
          <Image src={Logo} alt="" />
        </div>
        <nav className="hidden md:flex gap-12">
          <Link href="/">Home</Link>
          <Link href="/">Catálogo</Link>
          <Link href="/">Contacto</Link>
          <Link href="/categorias">Categorías</Link>
        </nav>
        <div className="hidden md:flex gap-3.5 text-2xl">
          <Link href="/login">
            <AiOutlineUser />
          </Link>
          <MdShoppingCart />
        </div>

        {/* Hamburguesita  */}
        <div className="md:hidden">
          <FiAlignJustify
            className="text-4xl cursor-pointer"
            onClick={trigger}
          />
        </div>
      </header>

      {open && <Navigation trigger={trigger} />}
    </>
  );
};

export default Navbar;
