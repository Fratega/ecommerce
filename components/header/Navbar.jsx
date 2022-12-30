import React from "react";
import Image from "next/image";
import Logo from "../../Public/img/Logo.png";
import { FiAlignJustify } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link"

const Navbar = () => {
  return (
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
        <ImSearch/>
        <MdShoppingCart/>
      </div>
      <div className="md:hidden">
        <FiAlignJustify className="text-4xl"/>
      </div>
    </header>
  );
};

export default Navbar;
