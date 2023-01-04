import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import {
  converse1,
  converse2,
  converse3,
  converse4,
  converse5,
  converse6,
  converse7,
  converse8,
  converse9,
} from "../../../components/populares/data";

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
            <ShoeCard
              img={converse1.img}
              nombre={converse1.nombre}
              precio={converse1.precio}
            />
            <ShoeCard
              img={converse2.img}
              nombre={converse2.nombre}
              precio={converse2.precio}
            />
            <ShoeCard
              img={converse3.img}
              nombre={converse3.nombre}
              precio={converse3.precio}
            />
            <ShoeCard
              img={converse4.img}
              nombre={converse4.nombre}
              precio={converse4.precio}
            />
            <ShoeCard
              img={converse5.img}
              nombre={converse5.nombre}
              precio={converse5.precio}
            />

            <ShoeCard
              img={converse6.img}
              nombre={converse6.nombre}
              precio={converse6.precio}
            />

            <ShoeCard
              img={converse7.img}
              nombre={converse7.nombre}
              precio={converse7.precio}
            />

            <ShoeCard
              img={converse8.img}
              nombre={converse8.nombre}
              precio={converse8.precio}
            />

            <ShoeCard
              img={converse9.img}
              nombre={converse9.nombre}
              precio={converse9.precio}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Converse;
