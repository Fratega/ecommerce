import Head from "next/head";
import Navbar from "../../components/header/Navbar";
import { SiNike } from "react-icons/si";
import ShoeInfo from "../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../components/shoe_info/ShoeCard";

import {
  nike1,
  nike2,
  nike3,
  nike4,
  nike5,
  nike6,
  nike7,
  nike8,
  nike9,
  nike10,
} from "../../components/populares/data";

const Nike = () => {
  return (
    <>
      <Head>
        <title>Nike sneakers</title>
      </Head>

      <Navbar />
      <main>
        {/* Banner  */}
        <section className="bg-black flex items-center justify-center h-[25rem]">
          <div>
            <SiNike className="text-white text-[12rem]" />
          </div>
        </section>

        {/* Titulo de los zapatos  */}
        <ShoeInfo title="Nike Sneakers" />

        {/* Grid de los zapas */}
        <section>
          <div className="w-11/12 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:w-[75%]">
            <ShoeCard
              img={nike1.img}
              nombre={nike1.nombre}
              precio={nike1.precio}
            />
            <ShoeCard
              img={nike2.img}
              nombre={nike2.nombre}
              precio={nike2.precio}
            />
            <ShoeCard
              img={nike3.img}
              nombre={nike3.nombre}
              precio={nike3.precio}
            />
            <ShoeCard
              img={nike4.img}
              nombre={nike4.nombre}
              precio={nike4.precio}
            />
            <ShoeCard
              img={nike5.img}
              nombre={nike5.nombre}
              precio={nike5.precio}
            />
            <ShoeCard
              img={nike6.img}
              nombre={nike6.nombre}
              precio={nike6.precio}
            />
             <ShoeCard
              img={nike7.img}
              nombre={nike7.nombre}
              precio={nike7.precio}
            />
             <ShoeCard
              img={nike8.img}
              nombre={nike8.nombre}
              precio={nike8.precio}
            />
             <ShoeCard
              img={nike9.img}
              nombre={nike9.nombre}
              precio={nike9.precio}
            />
             <ShoeCard
              img={nike10.img}
              nombre={nike10.nombre}
              precio={nike10.precio}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Nike;
