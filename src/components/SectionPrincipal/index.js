import React, { useState } from "react";
import Ecorrecorido from "./Ecorrecorido"; // Importa tu componente Ecorrecorido aquí

const SectionPrincipal = () => {
  const [showEcorrecorido, setShowEcorrecorido] = useState(false);

  const handleOnClickGrid1 = () => {
    setShowEcorrecorido(true);
  };

  const handleOnClickGrid2 = () => {
    // Aquí puedes realizar cualquier acción necesaria al hacer clic en el segundo grid
    console.log("Hiciste clic en el segundo grid");
  };

  return (
    <div className=" w-full relative">
        <div className="m-4 bg-gray-400 xl:p-12 rounded-xl">
      <div className="grid grid-cols-2 gap-4 p-2">
        <div
          className="bg-white bg-opacity-75 p-4 rounded-lg text-center cursor-pointer relative md:col-span-1 border-2 border-black shadow-2xl shadow-black hover:scale-105 transition-transform duration-300"
          onClick={handleOnClickGrid1}
        >
          <h2 className="text-2xl font-bold mb-4">Eco Parque</h2>
          <p>Historia</p>
          <img
            src="https://res.cloudinary.com/di1v23yy0/image/upload/v1710833645/logo-ecoparque2_uulvsi.png"
            alt="Imagen Grid 1"
            className=" object-cover rounded-lg mb-4"
          />
        </div>
        <div
          className="bg-white bg-opacity-75 p-4 rounded-lg text-center cursor-pointer relative md:col-span-1 border-2 border-black shadow-2xl shadow-black hover:scale-105 transition-transform duration-300"
          onClick={handleOnClickGrid2}
        >
          <h2 className="text-2xl font-bold mb-4">Consulta</h2>
          <p>CONSULTA POR TUS TERRENOS</p>
          <img
            src="https://res.cloudinary.com/di1v23yy0/image/upload/v1710833645/logo-ecoparque2_uulvsi.png"
            alt="Imagen Grid 2"
            className=" object-cover rounded-lg "
          />
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default SectionPrincipal;



