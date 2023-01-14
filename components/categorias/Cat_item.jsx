import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cat_item = ({nombre, img1, img2, img3, img4, to}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-6xl">{nombre}</h2>

      {/* Grid de fotos  */}
      <div className="grid grid-cols-3">
        <div className="relative col-span-3 h-[20rem] md:h-[25rem] lg:h-[22rem] 2xl:h-[32rem]">
          <Image src={img1} fill alt="" className="object-cover" />
        </div>
        <div className="relative h-[11rem] md:h-[16rem] lg:h-[13rem] 2xl:h-[16rem]">
          <Image src={img2} alt="" fill className="object-cover" />
        </div>
        <div className="relative h-[11rem] md:h-[16rem] lg:h-[13rem] 2xl:h-[16rem]">
          <Image src={img3} alt="" fill className="object-cover" />
        </div>
        <div className="relative h-[11rem] md:h-[16rem] lg:h-[13rem] 2xl:h-[16rem]">
          <Image src={img4} alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          href={to}
          className="border border-black py-3 px-10 text-xl transition-colors hover:bg-black hover:text-white"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Cat_item;
