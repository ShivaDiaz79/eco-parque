import { useState } from "react";
import MenuFlotante from "./MenuFlotante";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo y otros elementos del encabezado */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Código del logo omitido */}
              </svg>
            </a>
          </div>

          {/* Menú desplegable */}
          <div className="relative md:hidden">
            <button onClick={toggleMenu} className="p-2 text-gray-600 hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {isMenuOpen && <MenuFlotante />}
          </div>
        </div>
      </div>
    </header>
  );
};



export default Index
