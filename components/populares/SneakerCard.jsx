import React from "react";
import Image from "next/image";
import Link from "next/link";

const SneakerCard = ({ img, titulo, precio }) => {
  return (
    <Link href="/">
      <article className="border transition-colors rounded-xl border-white hover:border-slate-200">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-50 p-4 rounded-xl h-[10rem] flex items-center justify-center 2xl:h-[16rem]">
          <Image src={img} alt="" placeholder="blur" className="lg:w-[95%]" />
        </div>

        <div className="p-3">
          <h4 className="text-lg">{titulo}</h4>
          <p className="font-bold text-2xl">{precio}</p>
        </div>
      </article>
    </Link>
  );
};

export default SneakerCard;
