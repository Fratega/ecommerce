import Head from "next/head";
import Navbar from "../../components/header/Navbar";
import { SiFila } from "react-icons/si";
import ShoeInfo from "../../components/shoe_info/ShoeInfo";

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
    </main>
  </>
  )
}

export default Fila