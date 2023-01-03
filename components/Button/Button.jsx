import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/">
      <button className="bg-black py-4 px-14 rounded-xl border border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black lg:text-2xl">
        Obtenlas ya
      </button>
    </Link>
  );
};

export default Button;
