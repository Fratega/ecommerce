import React from "react";
import Link from "next/link";
import GridItem from "./GridItem";
import jordan from "../../public/img/cat-jordan/jordan.webp"
import nike from "../../Public/img/cat-nike/nike 3.webp"
import adidas from "../../Public/img/cat-adidas/adidas.webp"
import yeezy from "../../Public/img/cat-yeezy/yeezy.jpg"
import converse from "../../Public/img/cat-converse/converse.jpg"
import fila from "../../Public/img/cat-fila/fila.jpg"

const Grid = () => {
  return (
    <section>
      {/* Grid contenedor  */}
      <div className="w-11/12 mx-auto my-4 gap-4 grid grid-cols-1 md:grid-cols-2">
        <GridItem foto={jordan} nombre="Jordan" ruta="/categorias/jordan" />
        <GridItem foto={nike} nombre="Nike" ruta="/categorias/nike" />
        <GridItem foto={adidas} nombre="Adidas" ruta="/categorias/adidas" />
        <GridItem foto={yeezy} nombre="Yeezy" ruta="/categorias/yeezy" />
        <GridItem foto={converse} nombre="Converse" ruta="/categorias/converse" />
        <GridItem foto={fila} nombre="Fila" ruta="/categorias/fila" />
      </div>
    </section>
  );
};

export default Grid;
