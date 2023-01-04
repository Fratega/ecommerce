import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../../../components/header/Navbar";

import { jordan1, jordanos, people } from "../../../components/populares/data";

const ShoeId = () => {
  const router = useRouter();
  const shoeid = router.query.shoeid;

  return (
    <>
      <Head>
        <title>página dinamica</title>
      </Head>
      <Navbar />

      <main>
        <h1>Jordan dinámico {shoeid}</h1>
      </main>
    </>
  );
};

export default ShoeId;
