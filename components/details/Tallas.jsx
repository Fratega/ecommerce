import React from "react";

const Tallas = ({number, onClick, selected}) => {

  return (
    <>
      <button onClick={onClick}
        className={`border border-slate-400 rounded-full h-[4rem] w-[4rem] flex items-center justify-center text-lg transition-colors lg:h-[3.5rem] lg:w-[3.5rem] 2xl:h-[4rem] 2xl:w-[4rem] ${selected ? "bg-black border-none text-white" : null}`}
      >
        {number}
      </button>
    </>
  );
};

export default Tallas;
