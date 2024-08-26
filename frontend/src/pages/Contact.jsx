import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACTO"} text2={"HABLEMOS"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Nuestro local</p>
          <p className="text-gray-500">
            12345 Nombre Calle <br /> Edificio 123, Almeria, SPA
          </p>
          <p className="text-gray-500">
            Tel: (123) 444-5555 <br /> Email: contact@ejemplo.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">Obtenga más información sobre nuestro equipo de trabajo.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explorar trabajos
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
