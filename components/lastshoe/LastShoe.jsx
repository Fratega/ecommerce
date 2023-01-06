import React from "react";
import Image from "next/image";
import Link from "next/link";

const LastShoe = ({ ruta, foto }) => {
  return (
    <article className="w-11/12 mx-auto bg-primary-100 p-5 flex flex-col gap-2 lg:flex-row lg:justify-center items-center">
      <div className="flex flex-col items-center gap-2 lg:items-start">
        <h2 className="text-3xl font-bold">Encuentra tu calzado ideal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link href={ruta} className='bg-black text-white py-2 px-6 rounded-xl bottom-3 right-3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'>Ver más</Link>
      </div>
      <div>
        <Image src={foto} alt="" />
      </div>
    </article>
  );
};

export default LastShoe;
