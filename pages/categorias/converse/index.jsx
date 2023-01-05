import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import { converse } from "../../../components/populares/data";

const Converse = () => {
  return (
    <>
      <Head>
        <title>Converse Sneakers</title>
      </Head>

      <Navbar />
      <main>
        {/* Banner  */}
        <section className="bg-black flex items-center justify-center h-[25rem]">
          <h1 className="text-white font-bold uppercase text-6xl">Converse</h1>
        </section>

        {/* Titulo de zapatos  */}
        <ShoeInfo title="Converse Sneakers" />

        {/* Grid de los zapas */}
        <section>
          <div className="w-11/12 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:w-[75%]">
            {converse.map((shoe) => (
              <ShoeCard
                key={shoe.id}
                nombre={shoe.nombre}
                precio={shoe.precio}
                img={shoe.img}
                to={`converse/${zapato.id}`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Converse;
