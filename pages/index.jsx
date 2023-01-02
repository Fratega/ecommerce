import Head from "next/head";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";
import SneakerCard from "../components/populares/SneakerCard";

// Importanto datos de los zapatos
import {
  nike1,
  nike2,
  nike3,
  converse1,
  jordan1,
  jordan2,
  jordan3,
  yeezy1,
} from "../components/populares/data";

// Imagenes importadas de la sección sneakers populares
import img1 from "../public/img/blazer.png";
import img2 from "../public/img/converse.png";
import img3 from "../public/img/jordan.png";
import img4 from "../public/img/jordan2.png";
import img5 from "../public/img/jordan3.png";
import img6 from "../public/img/nike.png";
import img7 from "../public/img/nikeciaga.png";
import img8 from "../public/img/yeezy.png";
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

          {/* Grid  */}
          <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10  lg:w-[80%] lg:gap-x-10 2xl:gap-y-16">
            <div className="relative">
              <SneakerCard
                img={nike1.img}
                titulo={nike1.nombre}
                precio={`$${nike1.precio}`}
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
                img={jordan1.img}
                titulo={jordan1.nombre}
                precio={`$${jordan1.precio}`}
              />
              <div className="absolute -top-[1rem] -right-[1rem]">
                <HotDot />
              </div>
            </div>
            <SneakerCard
              img={jordan2.img}
              titulo={jordan2.nombre}
              precio={`$${jordan2.precio}`}
            />
            <SneakerCard
              img={jordan3.img}
              titulo={jordan3.nombre}
              precio={`$${jordan3.precio}`}
            />
            <SneakerCard
              img={nike2.img}
              titulo={nike2.nombre}
              precio={`$${nike2.precio}`}
            />
            <SneakerCard
              img={nike3.img}
              titulo={nike3.nombre}
              precio={`$${nike3.precio}`}
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
        </section>
      </main>
    </>
  );
}
