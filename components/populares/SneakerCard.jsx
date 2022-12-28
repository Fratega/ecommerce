import React from "react";
import Image from "next/image";
import Link from "next/link";

const SneakerCard = ({ img, titulo, precio }) => {
  return (
    <article>
      <Link href="/">
        <div className="bg-slate-50 p-4 rounded-xl h-[10rem] flex items-center justify-center 2xl:h-[16rem] border transition-colors border-white hover:border-slate-200">
          <Image src={img} alt="" className="lg:w-[95%]" />
        </div>
      </Link>

      <h4 className="text-lg">{titulo}</h4>
      <p className="font-bold text-2xl">{precio}</p>
    </article>
  );
};

export default SneakerCard;
