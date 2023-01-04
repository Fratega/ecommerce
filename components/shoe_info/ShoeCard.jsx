import React from "react";
import Image from "next/image";
import Link from "next/link";

const ShoeCard = ({ img, nombre, precio }) => {
  return (
    <Link href="/">
      <article className="border border-slate-300 transition-colors hover:border-black">
        <div className="bg-slate-100 p-2 h-[14rem] 2xl:h-[19rem] flex items-center justify-center">
          <Image src={img} alt="" placeholder="blur" />
        </div>
        <div className="m-3">
          <h2 className="text-xl">{nombre}</h2>
          <p className="text-2xl font-bold">{`$${precio}`}</p>
        </div>
      </article>
    </Link>
  );
};

export default ShoeCard;
