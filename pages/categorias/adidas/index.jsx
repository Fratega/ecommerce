import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import { SiAdidas } from "react-icons/si";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import {
  adidas1,
  adidas2,
  adidas3,
  adidas4,
  adidas5,
  adidas6,
  adidas7,
  adidas8,
  adidas9,
  adidas10,
} from "../../../components/populares/data";

const Adidas = () => {
  return (
    <>
      <>
        <Head>
          <title>Adidas Sneakers</title>
        </Head>

        <Navbar />
        <main>
          {/* Banner  */}
          <section className="bg-black flex items-center justify-center h-[25rem]">
            <div>
              <SiAdidas className="text-white text-[12rem]" />
            </div>
          </section>

          {/* Titulo de zapatos  */}
          <ShoeInfo title="Adidas Sneakers" />

          {/* Grid de los zapas */}
          <section>
            <div className="w-11/12 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:w-[75%]">
              <ShoeCard
                img={adidas1.img}
                nombre={adidas1.nombre}
                precio={adidas1.precio}
              />
              <ShoeCard
                img={adidas2.img}
                nombre={adidas2.nombre}
                precio={adidas2.precio}
              />
              <ShoeCard
                img={adidas3.img}
                nombre={adidas3.nombre}
                precio={adidas3.precio}
              />
              <ShoeCard
                img={adidas4.img}
                nombre={adidas4.nombre}
                precio={adidas4.precio}
              />
              <ShoeCard
                img={adidas5.img}
                nombre={adidas5.nombre}
                precio={adidas5.precio}
              />
              <ShoeCard
                img={adidas6.img}
                nombre={adidas6.nombre}
                precio={adidas6.precio}
              />
              <ShoeCard
                img={adidas7.img}
                nombre={adidas7.nombre}
                precio={adidas7.precio}
              />
              <ShoeCard
                img={adidas8.img}
                nombre={adidas8.nombre}
                precio={adidas8.precio}
              />
              <ShoeCard
                img={adidas9.img}
                nombre={adidas9.nombre}
                precio={adidas9.precio}
              />
              <ShoeCard
                img={adidas10.img}
                nombre={adidas10.nombre}
                precio={adidas10.precio}
              />
            </div>
          </section>
        </main>
      </>
    </>
  );
};

export default Adidas;
