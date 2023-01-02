import React from "react";
import Image from "next/image";
import img from "../../public/img/jordan1.jpg";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section>
      {/* Image and text container */}
      <div className="flex flex-col w-[90%] h-[70vh] relative mx-auto items-center justify-center md:h-[50rem] lg:h-[85vh]">
        <Image
          src={img}
          alt=""
          placeholder="blur"
          priority
          fill
          className="object-cover rounded-2xl -z-10 brightness-[.5]"
        />

        {/* Image Text */}
        <div className="flex flex-col items-center z-10 text-white gap-5">
          <h2 className="text-center "> Clásicos </h2>
          <h1 className="text-center text-6xl font-bold uppercase md:text-8xl 2xl:text-9xl">
            Jordan 1
          </h1>
          {/* Image button(Extern Component) */}
          <Button />
        </div>

        {/* Description of the image */}
        <div className="hidden md:flex  flex-col w-[30vh] text-white absolute bottom-[3rem] right-[3rem]">
          <h3 className="font-bold uppercase ">Description</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      {/* Image Description(Responsive) */}
      <div className="w-[90%] mx-auto mt-6 md:hidden">
        <h3 className="font-bold text-2xl">Description</h3>
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
