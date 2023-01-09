import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import { SiAdidas } from "react-icons/si";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import { adidas } from "../../../components/populares/data";

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
              {adidas.map((shoe) => (
                <ShoeCard
                  key={shoe.id}
                  nombre={shoe.nombre}
                  precio={shoe.precio}
                  img={shoe.img}
                  to={`adidas/${zapato.id}`}
                />
              ))}
            </div>
          </section>
        </main>
      </>
    </>
  );
};

export default Adidas;
