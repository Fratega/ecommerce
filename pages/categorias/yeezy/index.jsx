import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import {yeezy1, yeezy2, yeezy3, yeezy4, yeezy5} from "../../../components/populares/data"

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
            <ShoeCard
              img={yeezy1.img}
              nombre={yeezy1.nombre}
              precio={yeezy1.precio}
            />
            <ShoeCard
              img={yeezy2.img}
              nombre={yeezy2.nombre}
              precio={yeezy2.precio}
            />
            <ShoeCard
              img={yeezy3.img}
              nombre={yeezy3.nombre}
              precio={yeezy3.precio}
            />
            <ShoeCard
              img={yeezy4.img}
              nombre={yeezy4.nombre}
              precio={yeezy4.precio}
            />
            <ShoeCard
              img={yeezy5.img}
              nombre={yeezy5.nombre}
              precio={yeezy5.precio}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Yeezy;
