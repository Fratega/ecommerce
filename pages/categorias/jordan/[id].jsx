import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../../components/header/Navbar";

import { jordan } from "../../../components/populares/data";


export async function getStaticPaths() {
  const paths = jordan.map((shoe) => ({
    params: { id: shoe.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = jordan.find((i) => i.id === Number(params.id));
  return {
    props: { item },
  };
}

const ShoeId = ({ item }) => {
  return (
    <>
      <Head>
        <title>{`Detalles de ${item.nombre}`}</title>
      </Head>
      <Navbar />

      <main>
        <section>
          <div>
            <Image src={item.img} alt="" />
          </div>
          <h2 className="font-bold text-3xl">{item.nombre}</h2>
          <p className="text-2xl">{`$${item.precio}`}</p>
        </section>
      </main>
    </>
  );
};

export default ShoeId;
