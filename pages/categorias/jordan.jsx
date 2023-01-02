import Head from "next/head";
import Navbar from "../../components/header/Navbar";
import { SiJordan } from "react-icons/si";
import ShoeInfo from "../../components/shoe_info/ShoeInfo";

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

      <ShoeInfo title="Jordan Sneakers" />


    </main>
  </>
  )
}

export default Jordan