import React from "react";

const Tallas = ({number}) => {
  return (
    <button className="border border-slate-400 rounded-full h-[4rem] w-[4rem] flex items-center justify-center text-lg transition-colors focus:border-none focus:bg-black focus:text-white lg:h-[3.5rem] lg:w-[3.5rem] 2xl:h-[4rem] 2xl:w-[4rem]">
      {number}
    </button>
  );
};

export default Tallas;
