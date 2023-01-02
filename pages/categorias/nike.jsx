import Head from "next/head";
import Navbar from "../../components/header/Navbar";
import { SiNike } from "react-icons/si";
import ShoeInfo from "../../components/shoe_info/ShoeInfo";

const Nike = () => {
  return (
    <>
      <Head>
        <title>Nike sneakers</title>
      </Head>

      <Navbar />
      <main>

        {/* Banner  */}
        <section className="bg-black flex items-center justify-center h-[25rem]">
          <div>
            <SiNike className="text-white text-[12rem]" />
          </div>
        </section>

        <ShoeInfo title="Nike Sneakers" />


      </main>
    </>
  );
};

export default Nike;
