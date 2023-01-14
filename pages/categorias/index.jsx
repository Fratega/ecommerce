import Head from "next/head";
import Navbar from "../../components/header/Navbar";
import Cat_item from "../../components/categorias/Cat_item";
import { yeezy, nike, jordan, fila, converse, adidas } from "../../components/categorias/cat_data";
import LastItem from "../../components/lastitem/LastItem";

const Categorias = () => {
  return (
    <>
      <Head>
        <title>Categorias</title>
      </Head>

      <Navbar />
      <main>
        <section className="mt-10 grid grid-cols-1 px-3 gap-10 lg:grid-cols-2 lg:w-[90%] lg:mx-auto lg:px-0 lg:gap-6">
          <Cat_item
            nombre={yeezy.nombre}
            img1={yeezy.img1}
            img2={yeezy.img2}
            img3={yeezy.img3}
            img4={yeezy.img4}
            to="/categorias/yeezy"
          />
          <Cat_item
            nombre={nike.nombre}
            img1={nike.img1}
            img2={nike.img2}
            img3={nike.img3}
            img4={nike.img4}
            to="/categorias/nike"
          />
        </section>

        <section className="mt-10 grid grid-cols-1 px-3 gap-10 lg:grid-cols-2 lg:w-[90%] lg:mx-auto lg:px-0 lg:gap-6">
          <Cat_item
            nombre={jordan.nombre}
            img1={jordan.img1}
            img2={jordan.img2}
            img3={jordan.img3}
            img4={jordan.img4}
            to="/categorias/jordan"
          />
          <Cat_item
            nombre={fila.nombre}
            img1={fila.img1}
            img2={fila.img2}
            img3={fila.img3}
            img4={fila.img4}
            to="/categorias/fila"
          />
        </section>

        <section className="mt-10 grid grid-cols-1 px-3 gap-10 lg:grid-cols-2 lg:w-[90%] lg:mx-auto lg:px-0 lg:gap-6">
          <Cat_item
            nombre={adidas.nombre}
            img1={adidas.img1}
            img2={adidas.img2}
            img3={adidas.img3}
            img4={adidas.img4}
            to="/categorias/adidas"
          />
          <Cat_item
            nombre={converse.nombre}
            img1={converse.img1}
            img2={converse.img2}
            img3={converse.img3}
            img4={converse.img4}
            to="/categorias/converse"
          />
        </section>
      </main>

      <LastItem />
    </>
  );
};

export default Categorias;
