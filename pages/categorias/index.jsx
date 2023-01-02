import Head from "next/head";
import Navbar from "../../components/header/Navbar";
import Cat_item from "../../components/categorias/Cat_item";

// Tipografia de google fonts usando next/font
import { Outfit } from "@next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
});

// Jordan pics
import jordan from "../../public/img/cat-jordan/jordan.webp";
import jordan2 from "../../public/img/cat-jordan/jordan2.webp";
import jordan3 from "../../public/img/cat-jordan/jordan3.webp";
import jordan4 from "../../public/img/cat-jordan/jordan4.jpg";

// Nike pics
import nike from "../../public/img/cat-nike/nike.webp";
import nike2 from "../../public/img/cat-nike/nike2.webp";
import nike3 from "../../public/img/cat-nike/nike 3.webp";
import nike4 from "../../public/img/cat-nike/nike4.webp";

// Adidas pics
import adidas from "../../public/img/cat-adidas/adidas.webp";
import adidas2 from "../../public/img/cat-adidas/adidas2.jpg";
import adidas3 from "../../public/img/cat-adidas/adidas3.webp";
import adidas4 from "../../public/img/cat-adidas/adidas4.webp";

// Converse pics
import converse from "../../public/img/cat-converse/converse.jpg";
import converse2 from "../../public/img/cat-converse/converse2.jpg";
import converse3 from "../../public/img/cat-converse/converse3.jpg";
import converse4 from "../../public/img/cat-converse/converse4.jpeg";

// Yeezy pics
import yeezy from "../../public/img/cat-yeezy/yeezy.jpg";
import yeezy2 from "../../public/img/cat-yeezy/yeezy2.jpg";
import yeezy3 from "../../public/img/cat-yeezy/yeezy3.jpg";
import yeezy4 from "../../public/img/cat-yeezy/yeezy4.jpg";

// Fila pics
import fila from "../../public/img/cat-fila/fila.jpg";
import fila2 from "../../public/img/cat-fila/fila2.jpg";
import fila3 from "../../public/img/cat-fila/fila3.jpg";
import fila4 from "../../public/img/cat-fila/fila4.jpg";

const Categorias = () => {
  return (
    <>
      <Head>
        <title>Categorias</title>
      </Head>

      <Navbar />
      <main className="mt-10">
        <Cat_item
          titulo="Yeezy"
          img1={yeezy}
          img2={yeezy2}
          img3={yeezy3}
          img4={yeezy4}
        />

        <Cat_item
          titulo="Jordan"
          img1={jordan}
          img2={jordan2}
          img3={jordan3}
          img4={jordan4}
        />

        <Cat_item
          titulo="Fila"
          img1={fila}
          img2={fila2}
          img3={fila3}
          img4={fila4}
        />

        <Cat_item
          titulo="Nike"
          img1={nike}
          img2={nike2}
          img3={nike3}
          img4={nike4}
        />

        <Cat_item
          titulo="Adidas"
          img1={adidas}
          img2={adidas2}
          img3={adidas3}
          img4={adidas4}
        />

        <Cat_item
          titulo="Converse"
          img1={converse}
          img2={converse2}
          img3={converse3}
          img4={converse4}
        />
      </main>
    </>
  );
};

export default Categorias;
