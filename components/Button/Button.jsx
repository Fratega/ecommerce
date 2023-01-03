import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/">
      <button className="bg-black py-4 px-14 rounded-xl border border-white transition-colors hover:bg-white hover:text-black lg:text-2xl">
        Obtenlas ya
      </button>
    </Link>
  );
};

export default Button;
