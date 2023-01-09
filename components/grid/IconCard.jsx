import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

const IconCard = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-2 gap-3 lg:grid-cols-4">
      <article className="card">
        <div>
          <TbTruckDelivery className="icon" />
        </div>
        <div>
          <h4 className="h4">Delivery gratis</h4>
          <h5 className="text-neutral-400 text-lg">San Diego - Valencia</h5>
        </div>
      </article>

      <article className="card">
        <div>
          <BsCheckCircleFill className="icon" />
        </div>
        <div>
          <h4 className="h4">Calidad garantizada</h4>
          <h5 className="text-neutral-400 text-lg">Vendemos calzados importados de calidad</h5>
        </div>
      </article>

      <article className="card">
        <div>
          <BsCreditCard2Back className="icon" />
        </div>
        <div>
          <h4 className="h4">Pagos seguros</h4>
          <h5 className="text-neutral-400 text-lg">Aceptamos todo tipo de tarjetas</h5>
        </div>
      </article>

      <article className="card">
        <div>
          <BsPersonCircle className="icon" />
        </div>
        <div>
          <h4 className="h4">Servicio al cliente las 24 horas</h4>
          <h5 className="text-neutral-400 text-lg">Cualquiier duda contáctanos</h5>
        </div>
      </article>
    </div>
  );
};

export default IconCard;
