import React from "react";
import Image from "next/image";
import Link from "next/link";

const Grid = ({ img1 }) => {
  return (
    <section className="w-11/12 mx-auto mt-[2rem] ">
      {/* Contenedor Grid */}
      <div className="relative">
        <div className="relative w-full h-[8rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[28rem] ">
          <Image
            src={img1}
            alt=""
            fill
            className="brightness-50 rounded-xl object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 w-max ml-auto mt-5">
            <Link href="/">
              <button className="border border-white bg-white text-black py-2 px-4 rounded-full text-md lg:text-2xl lg:px-28 transition-colors hover:bg-black hover:text-white">
                Ver más
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
