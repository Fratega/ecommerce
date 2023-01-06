import React from "react";
import Image from "next/image";
import Link from "next/link";

const LastShoe = ({ ruta, foto }) => {
  return (
    <article>
      <div className="flex w-11/12 h-[45vh] relative  mx-auto my-5 items-start justify-center">
        <Image
          src={foto}
          alt=""
          placeholder="blur"
          fill
          priority
          className="object-cover"
        />
        {/* Texto de la imagen */}
        <div className="flex flex-col items-center absolute gap-1 text-black ">
          <h2 className="font-bold text-2xl">Encuentra tu calzado ideal</h2>
          <h3 className="text-xl">Lorem ostia chaval</h3>
          <Link
            href={ruta}
            className="bg-black text-white py-2 px-6 text-lg rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100"
          >
            Ver todos
          </Link>
        </div>
      </div>
    </article>
  );
};

export default LastShoe;
