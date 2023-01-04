import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import { SiJordan } from "react-icons/si";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import { jordan } from "../../../components/populares/data";

const Jordan = () => {
  return (
    <>
      <Head>
        <title>Jordan Sneakers</title>
      </Head>

      <Navbar />
      <main>
        {/* Banner  */}
        <section className="bg-black flex items-center justify-center h-[25rem]">
          <div>
            <SiJordan className="text-white text-[12rem]" />
          </div>
        </section>

        {/* Titulo de zapatos  */}
        <ShoeInfo title="Jordan Sneakers" />

        {/* Grid de los zapas */}
        <section>
          <div className="w-11/12 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:w-[75%]">
            {jordan.map((zapato) => (
              <ShoeCard
                key={zapato.id}
                img={zapato.img}
                nombre={zapato.nombre}
                precio={zapato.precio}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Jordan;
