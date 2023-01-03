import React from "react";
import Link from "next/link";
import GridItem from "./GridItem";
import jordan from "../../public/img/cat-jordan/jordan.webp"

const Grid = () => {
  return (
    <section>
      {/* Grid contenedor  */}
      <div className="w-11/12 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2">
        <GridItem foto={jordan} nombre="Jordan" direccion="/categorias/jordan" />
        <GridItem foto={jordan} nombre="Jordan" direccion="/categorias/jordan" />
        <GridItem foto={jordan} nombre="Jordan" direccion="/categorias/jordan" />
        <GridItem foto={jordan} nombre="Jordan" direccion="/categorias/jordan" />
        <GridItem foto={jordan} nombre="Jordan" direccion="/categorias/jordan" />
        <GridItem foto={jordan} nombre="Jordan" direccion="/categorias/jordan" />
      </div>
    </section>
  );
};

export default Grid;
