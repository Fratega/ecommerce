import React from "react";
import Image from "next/image";

const SneakerCard = ({ img, titulo, precio }) => {
  return (
    <article className="">
      <div className="bg-slate-50 p-4 rounded-xl h-[10rem] flex items-center justify-center 2xl:h-[16rem] border transition-colors border-white hover:border-slate-200">
        <Image src={img} alt="" className="lg:w-[95%]" />
      </div>
      <h4 className="text-lg">{titulo}</h4>
      <p className="font-bold text-2xl">{precio}</p>
    </article>
  );
};

export default SneakerCard;
