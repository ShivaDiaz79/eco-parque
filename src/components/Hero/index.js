import React from "react";

const Index = () => {
  return (
    <div className="relative w-full pt-16 xl:pt-0">
      <video
        className="w-full"
        controls
        autoPlay
        playsInline
        loop
        muted
        poster="placeholder.jpg" // Poster opcional para mostrar antes de reproducir
      >
        <source
          src="https://res.cloudinary.com/di1v23yy0/video/upload/v1710832987/VIDEO-2024-03-18-08-55-32_zu0ote.mp4"
          type="video/mp4"
        />
        {/* Agrega aquí más etiquetas <source> para formatos adicionales si es necesario */}
       
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className=" text-black">Un hogar, y un refugio para quienes lo habitan...</p>
        <a
          className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
          href="#"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-green-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

          <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
            Consulta
          </span>
        </a>
      </div>
    </div>
  );
};

export default Index;
