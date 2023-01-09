import React from "react";
import Image from "next/image";
import Link from "next/link";

const LastShoe = ({ ruta, foto }) => {
  return (
    <section>
      <article className="w-11/12 mx-auto rounded-xl bg-primary-100 p-5 flex flex-col gap-2 lg:flex-row lg:justify-center lg:items-center lg:p-12">
        <div className="flex flex-col items-center gap-1 lg:items-start mb-10 lg:mb-0 lg:gap-2">
          <h2 className="text-3xl font-bold md:text-5xl">Encuentra tu calzado ideal</h2>
          <p className="md:text-xl text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link
            href={ruta}
            className="bg-black text-white py-2 px-6 rounded-xl transition ease-in-out delay-100 md:text-xl hover:-translate-y-1 hover:scale-110"
          >
            Ver más
          </Link>
        </div>

        <div>
          <Image src={foto} alt="" />
        </div>
      </article>
    </section>
  );
};

export default LastShoe;
