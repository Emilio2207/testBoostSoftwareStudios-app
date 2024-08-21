import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Politica de Devolución</p>
        <p className="text-gray-400">Política de devolución sin complicaciones</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Política de devolución de 30 min</p>
        <p className="text-gray-400">Política de devolución gratuita de 30 min</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">La mejor atención al cliente</p>
        <p className="text-gray-400">Brindamos atención al cliente 24 horas</p>
      </div>
    </div>
  );
};

export default OurPolicy;
