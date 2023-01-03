import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cat_item = ({ titulo, img1, img2, img3, img4 }) => {
  return (
    <section className="w-11/12 mx-auto mb-[5rem] lg:mb-[7rem]">
      <h2 className="font-bold uppercase text-6xl md:text-8xl lg:text-9xl">
        {titulo}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* Foto principal  */}
        <div className="relative w-full h-[15rem] col-span-2 md:col-span-3 md:h-[20rem] lg:h-[35rem] 2xl:h-[58rem] ">
          <Image
            src={img1}
            alt=""
            fill
            className="rounded-xl object-cover object-center"
          />
        </div>

        <div className="relative w-full h-[15rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[33rem] ">
          <Image
            src={img2}
            alt=""
            fill
            className="rounded-xl object-cover object-center"
          />
        </div>

        <div className="relative w-full h-[15rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[33rem] ">
          <Image
            src={img3}
            alt=""
            fill
            className="rounded-xl object-cover object-center"
          />
        </div>

        <div className="hidden md:block relative w-full h-[15rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[33rem] ">
          <Image
            src={img4}
            alt=""
            fill
            className="rounded-xl object-cover object-center"
          />
        </div>
      </div>

      {/* Ver más  */}
      <div className="w-max ml-auto mt-5">
        <Link href="/">
          <button className="border border-black py-4 px-16 rounded-full text-xl lg:text-2xl lg:px-28 transition-colors hover:bg-black hover:text-white">
            Ver más
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Cat_item;
