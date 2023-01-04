import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import { SiFila } from "react-icons/si";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import {fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8, fila9, fila10} from "../../../components/populares/data"


const Fila = () => {
  return (
    <>
    <Head>
      <title>Fila sneakers</title>
    </Head>

    <Navbar />
    <main>

      {/* Banner  */}
      <section className="bg-black flex items-center justify-center h-[25rem]">
        <div>
          <SiFila className="text-white text-[12rem]" />
        </div>
      </section>

      <ShoeInfo title="Fila Sneakers" />

          {/* Grid de los zapas */}
          <section>
          <div className="w-11/12 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:w-[75%]">
            <ShoeCard
              img={fila1.img}
              nombre={fila1.nombre}
              precio={fila1.precio}
            />
            <ShoeCard
              img={fila2.img}
              nombre={fila2.nombre}
              precio={fila2.precio}
            />
            <ShoeCard
              img={fila3.img}
              nombre={fila3.nombre}
              precio={fila3.precio}
            />
            <ShoeCard
              img={fila4.img}
              nombre={fila4.nombre}
              precio={fila4.precio}
            />
            <ShoeCard
              img={fila5.img}
              nombre={fila5.nombre}
              precio={fila5.precio}
            />
            <ShoeCard
              img={fila6.img}
              nombre={fila6.nombre}
              precio={fila6.precio}
            />
             <ShoeCard
              img={fila7.img}
              nombre={fila7.nombre}
              precio={fila7.precio}
            />
             <ShoeCard
              img={fila8.img}
              nombre={fila8.nombre}
              precio={fila8.precio}
            />
             <ShoeCard
              img={fila9.img}
              nombre={fila9.nombre}
              precio={fila9.precio}
            />
             <ShoeCard
              img={fila10.img}
              nombre={fila10.nombre}
              precio={fila10.precio}
            />
          </div>
        </section>
    </main>
  </>
  )
}

export default Fila