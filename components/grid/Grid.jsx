import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cat_item = ({ img1, img2, img3, img4, img5, img6 }) => {
  return (
    <section className="w-11/12 mx-auto mt-[2rem] mb-[5rem] lg:mb-[7rem]">
      {/* Contenedor Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Contenedor de imagen */}
        <div className="relative w-full h-[8rem] col-span-1 md:col-span-1 md:h-[18rem] lg:h-[24rem] 2xl:h-[24rem] ">
          <Image
            src={img1}
            alt=""
            fill
            className="brightness-50 rounded-xl object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 w-max ml-auto mt-5">
            <Link href="categorias/jordan">
              <button className="border border-white bg-white text-black py-1 px-4 rounded-full text-md lg:text-2xl lg:px-28 transition-colors hover:bg-black hover:text-white">
                Ver más
              </button>
            </Link>
          </div>
        </div>
        {/* Contenedor de imagen */}
        <div className="relative w-full h-[8rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[24rem] ">
          <Image
            src={img2}
            alt=""
            fill
            className="brightness-50 rounded-xl object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 w-max ml-auto mt-5">
            <Link href="/categorias/nike">
              <button className="border border-white bg-white text-black py-1 px-4 rounded-full text-md lg:text-2xl lg:px-28 transition-colors hover:bg-black hover:text-white">
                Ver más
              </button>
            </Link>
          </div>
        </div>
        {/* Contenedor de imagen */}
        <div className="relative w-full h-[8rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[24rem] ">
          <Image
            src={img3}
            alt=""
            fill
            className="brightness-50 rounded-xl object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 w-max ml-auto mt-5">
            <Link href="/categorias/adidas">
              <button className="border border-white bg-white text-black py-1 px-4 rounded-full text-md lg:text-2xl lg:px-28 transition-colors hover:bg-black hover:text-white">
                Ver más
              </button>
            </Link>
          </div>
        </div>
        {/* Contenedor de imagen */}
        <div className="relative w-full h-[8rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[24rem]">
          <Image
            src={img4}
            alt=""
            fill
            className="brightness-50 rounded-xl object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 w-max ml-auto mt-5">
            <Link href="/categorias/converse">
              <button className="border border-white bg-white text-black py-1 px-4 rounded-full text-md lg:text-2xl lg:px-28 transition-colors hover:bg-black hover:text-white">
                Ver más
              </button>
            </Link>
          </div>
        </div>
        {/* Contenedor de imagen */}
        <div className="relative w-full h-[8rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[24rem] ">
          <Image
            src={img5}
            alt=""
            fill
            className="brightness-50 rounded-xl object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 w-max ml-auto mt-5">
            <Link href="/categorias/yeezy">
              <button className="border border-white bg-white text-black py-1 px-4 rounded-full text-md lg:text-2xl lg:px-28 transition-colors hover:bg-black hover:text-white">
                Ver más
              </button>
            </Link>
          </div>
        </div>
        {/* Contenedor de imagen */}
        <div className="relative w-full h-[8rem] md:h-[18rem] lg:h-[24rem] 2xl:h-[24rem] ">
          <Image
            src={img6}
            alt=""
            fill
            className="brightness-50 rounded-xl object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 w-max ml-auto mt-5">
            <Link href="/categorias/fila">
              <button className="border border-white bg-white text-black py-1 px-4 rounded-full text-md lg:text-2xl lg:px-28 transition-colors hover:bg-black hover:text-white">
                Ver más
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cat_item;
