import React from "react";
import Image from "next/image";
import Firma from "../../public/img/firma/firma.png"

const LastItem = () => {
  return (
    <div className="bg-black p-10 mt-8">
      <Image
        src={Firma}
        alt=""
        classname=""
      />
    </div>
  );
};

export default LastItem;
