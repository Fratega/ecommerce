import React from "react";
import Image from "next/image";
import HeroImg from "../Public/img/HeroImg.png";

const Hero = () => {
  return (
    <section>
      <div className="bg-red-400 w-11/12 h-screen mx-auto rounded-xl relative">
        <Image src={HeroImg} alt="" fill className="object-cover rounded-xl" />
      </div>
    </section>
  );
};

export default Hero;
