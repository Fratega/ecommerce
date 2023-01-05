import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import { SiFila } from "react-icons/si";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import { fila } from "../../../components/populares/data";

const Fila = () => {
  return (
    <>
      <Head>
        <title>Fila sneakers</title>
      </Head>

      <Navbar />
      <main>
        {/* Banner  */}
        <section className="bg-black flex items-center justify-center h-[25rem]">
          <div>
            <SiFila className="text-white text-[12rem]" />
          </div>
        </section>

        <ShoeInfo title="Fila Sneakers" />

        {/* Grid de los zapas */}
        <section>
          <div className="w-11/12 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:w-[75%]">
            {fila.map((zapato) => (
              <ShoeCard
                key={zapato.id}
                nombre={zapato.nombre}
                precio={zapato.precio}
                img={zapato.img}
                to={`fila/${zapato.id}`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Fila;
