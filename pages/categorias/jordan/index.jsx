import Head from "next/head";
import Navbar from "../../../components/header/Navbar";
import { SiJordan } from "react-icons/si";
import ShoeInfo from "../../../components/shoe_info/ShoeInfo";
import ShoeCard from "../../../components/shoe_info/ShoeCard";

import {jordan1, jordan2, jordan3, jordan4, jordan5, jordan6, jordan7, jordan8, jordan9, jordan10} from "../../../components/populares/data"

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
            <ShoeCard
              img={jordan1.img}
              nombre={jordan1.nombre}
              precio={jordan1.precio}
            />
            <ShoeCard
              img={jordan2.img}
              nombre={jordan2.nombre}
              precio={jordan2.precio}
            />
            <ShoeCard
              img={jordan3.img}
              nombre={jordan3.nombre}
              precio={jordan3.precio}
            />
            <ShoeCard
              img={jordan4.img}
              nombre={jordan4.nombre}
              precio={jordan4.precio}
            />
            <ShoeCard
              img={jordan5.img}
              nombre={jordan5.nombre}
              precio={jordan5.precio}
            />
            <ShoeCard
              img={jordan6.img}
              nombre={jordan6.nombre}
              precio={jordan6.precio}
            />
             <ShoeCard
              img={jordan7.img}
              nombre={jordan7.nombre}
              precio={jordan7.precio}
            />
             <ShoeCard
              img={jordan8.img}
              nombre={jordan8.nombre}
              precio={jordan8.precio}
            />
             <ShoeCard
              img={jordan9.img}
              nombre={jordan9.nombre}
              precio={jordan9.precio}
            />
             <ShoeCard
              img={jordan10.img}
              nombre={jordan10.nombre}
              precio={jordan10.precio}
            />
          </div>
        </section>


    </main>
  </>
  )
}

export default Jordan