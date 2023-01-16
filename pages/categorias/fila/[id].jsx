import React from "react";
import Head from "next/head";
import Image from "next/image";
import { fila } from "../../../components/populares/data";
import Tallas from "../../../components/details/Tallas";
import Contador from "../../../components/details/Contador";

export async function getStaticPaths() {
  const paths = fila.map((shoe) => ({
    params: { id: shoe.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = fila.find((i) => i.id === Number(params.id));
  return {
    props: { item },
  };
}

const ShoeId = ({item}) => {
  return (
    <>
    <Head>
        <title>{`Detalles de ${item.nombre}`}</title>
    </Head>

    
    <main>
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen lg:items-center">
          {/* Contenedor del zapato  */}
          <div className="bg-slate-100 flex items-center justify-center h-[30rem] p-3 lg:h-full">
            <Image src={item.img} alt="" className="2xl:w-[70%]" />
          </div>

          {/* Contenedor de la información  */}
          <div className="p-4 flex flex-col gap-8 max-w-xl mx-auto md:p-5 lg:gap-6 lg:p-0 2xl:max-w-none 2xl:p-[4rem] 2xl:gap-8">
            {/* Titulo y descripción */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-5xl">{item.nombre}</h1>
              <p className="text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem voluptatum inventore expedita vero distinctio
                recusandae a ex temporibus omnis quasi exercitationem aliquam,
                cum ipsam soluta?
              </p>
            </div>

            {/* Talla  */}
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">Talla:</p>
              <div className="flex flex-wrap gap-4">
                <Tallas number={39} />
                <Tallas number={40} />
                <Tallas number={41} />
                <Tallas number={42} />
                <Tallas number={43} />
                <Tallas number={44} />
                <Tallas number={45} />
              </div>
            </div>

            {/* Precio  */}
            <div>
              <p className="font-bold text-4xl">{`$${item.precio}`}</p>
            </div>

            {/* Cantidad  */}
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">Cantidad:</p>
              <Contador />
            </div>

            {/* Carrito  */}
            <button className="bg-black text-white py-4 text-2xl">Agregar al carrito</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default ShoeId