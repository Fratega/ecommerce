import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import { yeezy } from "../../../components/populares/data";

const Yeezy = () => {
  return (
    <>
      <Head>
        <title>Yeezy Sneakers</title>
      </Head>

      <Navbar />
      <main>
        {/* Banner  */}
        <section className="bg-black flex items-center justify-center h-[25rem]">
          <h1 className="text-white font-bold uppercase text-6xl">Yeezy</h1>
        </section>

        {/* Titulo de zapatos  */}
        <ShoeInfo title="Yeezy Sneakers" />

        {/* Grid de los zapas */}
        <section>
          <div className="w-11/12 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:w-[75%]">
            {yeezy.map((shoe) => (
              <ShoeCard
                key={shoe.id}
                nombre={shoe.nombre}
                precio={shoe.precio}
                img={shoe.img}
                to={`yeezy/${shoe.id}`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Yeezy;
