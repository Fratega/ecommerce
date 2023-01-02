import React from "react";

const ShoeInfo = ({title}) => {
  return (
    <div className="w-11/12 mx-auto my-6">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="text-slate-400">
        Mostrando <strong>1-10</strong> resultados
      </p>
      <div className="w-full mt-6">
        <select
          name="orden"
          className="bg-black text-white block p-2 w-full md:w-auto md:ml-auto "
        >
          <option value="relevancia">Relevancia</option>
          <option value="nuevos">Nuevos</option>
          <option value="priceh">Precio (mayor a menor)</option>
          <option value="pricel">Precio (menor a mayor)</option>
          <option value="top">Top ventas</option>
        </select>
      </div>
    </div>
  );
};

export default ShoeInfo;
