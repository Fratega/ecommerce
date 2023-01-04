import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import { SiNike } from "react-icons/si";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import { nike } from "../../../components/populares/data";

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
            {nike.map((zapato) => (
              <ShoeCard
                key={zapato.id}
                nombre={zapato.nombre}
                img={zapato.img}
                precio={zapato.precio}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Nike;
