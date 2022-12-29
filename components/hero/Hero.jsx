import React from "react";
import Image from "next/image";
import Jordans from "../../Public/img/Jordans.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="">
      {/* Image and text container */}
      <div className="flex flex-col w-[90%] h-[70vh] relative mx-auto items-center justify-center lg:h-[85vh]">
        <Image
          src={Jordans}
          alt=""
          className="object-cover rounded-2xl -z-10"
          fill
        />
        {/* Image Text */}
        <div className="flex flex-col z-10 text-white gap-5">
          <h1 className="text-center "> Clásicos </h1>
          <h2 className="text-center text-5xl font-bold uppercase md:text-8xl">
            Jordan 1
          </h2>
          {/* Image button(Extern Component) */}
          <Button />
        </div>
        {/* Description of the image */}
        <div className="hidden md:flex flex-col w-[30vh] text-white absolute bottom-[3rem] right-[3rem]">
          <h1 className="font-bold uppercase ">Description</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      {/* Image Description(Responsive) */}
      <div className="px-[1.5rem] md:hidden">
        <h1 className="font-bold uppercase">Description</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit minus,
          voluptas iste quaerat dicta, fuga ratione accusamus officia deleniti
          ducimus magnam voluptatibus nobis esse maiores? Deleniti quia libero
          ipsam fugiat!
        </p>
      </div>
    </section>
  );
};

export default Hero;
