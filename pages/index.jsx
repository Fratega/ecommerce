import Head from "next/head";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";
import ShoeCard from "../components/shoe_info/ShoeCard";
import Grid from "../components/grid/Grid";
import LastShoe from "../components/lastshoe/LastShoe";
import Nike21 from "../public/img/cat-nike/kobe 1.png";
import HotDot from "../components/populares/HotDot";
import LastItem from "../components/lastitem/LastItem";
import { getSession, signOut } from "next-auth/react";

// Importando datos de los zapatos
import {
  nike,
  converse,
  adidas,
  jordan,
  yeezy,
  fila,
} from "../components/populares/data";

export default function Home({ session }) {
  return (
    <>
      <Head>
        <title>Eccomerce de Shoes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {session ? (
        <div>
          <p className="text-black">{session.user.name}</p>
          <p className="text-black">{session.user.email}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-400 p-3 text-white"
          >
            Cerrar sesión
          </button>
        </div>
      ) : null}

      {/* Main  */}
      <main>
        <Hero />
        <Grid />
        {/* Sneakers populares  */}
        <section className="my-[3rem] lg:my-[4.5rem] 2xl:my-[6rem]">
          {/* Titulo  */}
          <div className="w-11/12 mx-auto text-center mb-8">
            <h2 className="font-bold text-3xl lg:text-5xl">
              Sneakers populares
            </h2>
            <p className="text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, perferendis.
            </p>
          </div>

          {/* Grid de Sneakers Populares */}
          <div className="w-11/12 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:w-[75%]">
            <div className="relative">
              <ShoeCard
                img={fila[0].img}
                nombre={fila[0].nombre}
                precio={`$${fila[0].precio}`}
                to={`/categorias/fila/${fila[0].id}`}
              />
              <div className="absolute -top-[1rem] -right-[1rem]">
                <HotDot />
              </div>
            </div>
            <ShoeCard
              img={converse[1].img}
              nombre={converse[1].nombre}
              precio={`$${converse[1].precio}`}
              to={`/categorias/converse/${converse[1].id}`}
            />
            <div className="relative">
              <ShoeCard
                img={jordan[4].img}
                nombre={jordan[4].nombre}
                precio={`$${jordan[4].precio}`}
                to={`/categorias/jordan/${jordan[4].id}`}
              />
              <div className="absolute -top-[1rem] -right-[1rem]">
                <HotDot />
              </div>
            </div>
            <ShoeCard
              img={jordan[5].img}
              nombre={jordan[5].nombre}
              precio={`$${jordan[5].precio}`}
              to={`/categorias/jordan/${jordan[5].id}`}
            />
            <ShoeCard
              img={adidas[4].img}
              nombre={adidas[4].nombre}
              precio={`$${adidas[4].precio}`}
              to={`/categorias/adidas/${adidas[4].id}`}
            />
            <ShoeCard
              img={nike[1].img}
              nombre={nike[1].nombre}
              precio={`$${nike[1].precio}`}
              to={`/categorias/nike/${nike[1].id}`}
            />
            <ShoeCard
              img={nike[2].img}
              nombre={nike[2].nombre}
              precio={`$${nike[2].precio}`}
              to={`/categorias/nike/${nike[2].id}`}
            />
            <div className="relative">
              <ShoeCard
                img={yeezy[1].img}
                nombre={yeezy[1].nombre}
                precio={`$${yeezy[1].precio}`}
                to={`/categorias/yeezy/${yeezy[1].id}`}
              />

              <div className="absolute -top-[1rem] -right-[1rem]">
                <HotDot />
              </div>
            </div>
          </div>
        </section>

        {/* Calzado ideal */}
        <LastShoe foto={Nike21} ruta="/categorias" />
      </main>
      <LastItem />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
