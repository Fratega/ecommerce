import React from "react";

const Contador = () => {
  const [number, setNumber] = React.useState(1);
  function sumar() {
    setNumber(number + 1);
  }

  function restar() {
    number > 1 ? setNumber(number - 1) : null;
  }

  return (
    <div className="flex items-center gap-5">
      <div
        onClick={sumar}
        className="border flex items-center justify-center h-[3rem] w-[3rem] text-2xl cursor-pointer"
      >
        +
      </div>
      <p className="text-lg">{number}</p>
      <div
        onClick={restar}
        className="border flex items-center justify-center h-[3rem] w-[3rem] text-2xl cursor-pointer"
      >
        -
      </div>
    </div>
  );
};

export default Contador;
