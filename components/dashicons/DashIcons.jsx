import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

const DashIcons = () => {
  return (
    <article className="grid grid-cols-2 text-center gap-12 md:flex justify-between md:flex-row md:m-14">
      {/* Container 1 */}
      <div className="md:flex">
        <div>
          <TbTruckDelivery className="fill-red-800 mx-auto text-5xl md:mr-1" />
        </div>
        <div>
          <p className="font-bold">Delivery Gratis</p>
          <p>Valencia-Carabobo</p>
        </div>
      </div>
      {/* Container 2 */}
      <div className="md:flex">
        <div>
          <BsCheckCircleFill className="fill-red-800 mx-auto text-5xl md:mr-1" />
        </div>
        <div>
          <p className="font-bold">Calidad Garantizada</p>
          <p>Calzados importados</p>
        </div>
      </div>
      {/* Container 3 */}
      <div className="md:flex">
        <div>
          <BsCreditCard2Back className="fill-red-800 mx-auto text-5xl md:mr-1" />
        </div>
        <div>
          <p className="font-bold">Pagos Seguros</p>
          <p>Cualquier tipo</p>
        </div>
      </div>
      {/* Container 4 */}
      <div className="md:flex">
        <div>
          <BsPersonCircle className="fill-red-800 mx-auto text-5xl md:mr-1" />
        </div>
        <div>
          <p className="font-bold">Atención 24 horas</p>
          <p>Contáctanos</p>
        </div>
      </div>
    </article>
  );
};

export default DashIcons;
