import React from "react";
import Image from "next/image";
import HeroImg from "../../img/HeroImg.png";

const Hero = () => {
  return (
    <section>
      <div className="">
        <Image src={HeroImg} className="" />
      </div>

    </section>
  );
};

export default Hero;
