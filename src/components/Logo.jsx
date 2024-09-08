import React from "react";
import logoImage from "../assets/logo.svg";

export const Logo = () => {
  return (
    <section className="flex flex-row text-5xl justify-center items-center text-center gap-2">
      <img src={logoImage} alt="Logo" className="h-32" />
      <h1 className="text-bold text-white ml-4 md:text-black">
        Ofertas Semanales
      </h1>
    </section>
  );
};
