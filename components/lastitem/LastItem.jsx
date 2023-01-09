import React from "react";
import Image from "next/image";
import Firma from "../../public/img/firma/firma.png"

const LastItem = () => {
  return (
    <footer className="bg-black p-10 mt-[3rem] flex items-center justify-center">
      <Image
        src={Firma}
        alt=""
      />
    </footer>
  );
};

export default LastItem;
