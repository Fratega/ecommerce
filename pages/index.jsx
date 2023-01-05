import Head from "next/head";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";
import SneakerCard from "../components/populares/SneakerCard";
import Grid from "../components/grid/Grid";
import LastShoe from "../components/lastshoe/LastShoe";
import Nike21 from "../public/img/cat-nike/Nike21.png";

// Importando datos de los zapatos
import {
  nike,
  converse1,
  adidas,
  jordan,
  yeezy1,
} from "../components/populares/data";

import HotDot from "../components/populares/HotDot";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eccomerce de Shoes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main  */}
      <main>
        <Navbar />
        <Hero />
        <Grid />

        {/* Sneakers populares  */}
        <section>
          {/* Titulo  */}
          <div className="w-11/12 mx-auto text-center my-8">
            <h2 className="font-bold text-4xl lg:text-5xl">
              Sneakers populares
            </h2>
            <p className="text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, perferendis.
            </p>
          </div>

          {/* Grid de Sneakers Populares */}
          <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10  lg:w-[80%] lg:gap-x-10 2xl:gap-y-16">
            <div className="relative">
              <SneakerCard
                img={nike[0].img}
                titulo={nike[0].nombre}
                precio={`$${nike[0].precio}`}
              />
              <div className="absolute -top-[1rem] -right-[1rem]">
                <HotDot />
              </div>
            </div>
            <SneakerCard
              img={converse1.img}
              titulo={converse1.nombre}
              precio={`$${converse1.precio}`}
            />
            <div className="relative">
              <SneakerCard
                img={jordan[4].img}
                titulo={jordan[4].nombre}
                precio={`$${jordan[4].precio}`}
              />
              <div className="absolute -top-[1rem] -right-[1rem]">
                <HotDot />
              </div>
            </div>
            <SneakerCard
              img={jordan[5].img}
              titulo={jordan[5].nombre}
              precio={`$${jordan[5].precio}`}
            />
            <SneakerCard
              img={adidas[4].img}
              titulo={adidas[4].nombre}
              precio={`$${adidas[4].precio}`}
            />
            <SneakerCard
              img={nike[1].img}
              titulo={nike[1].nombre}
              precio={`$${nike[1].precio}`}
            />
            <SneakerCard
              img={nike[2].img}
              titulo={nike[2].nombre}
              precio={`$${nike[2].precio}`}
            />
            <div className="relative">
              <SneakerCard
                img={yeezy1.img}
                titulo={yeezy1.nombre}
                precio={`$${yeezy1.precio}`}
              />

              <div className="absolute -top-[1rem] -right-[1rem]">
                <HotDot />
              </div>
            </div>
          </div>
          {/* Ultima carta */}
          <LastShoe foto={Nike21} ruta="/categorias" />
        </section>
      </main>
    </>
  );
}
