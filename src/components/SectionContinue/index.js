import Link from "next/link";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 bg-black m-3">
      <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        className="relative overflow-hidden cursor-pointer border-2 border-white"
      >
        <Link href="/pagina-1">
          
            <img
              src="https://res.cloudinary.com/di1v23yy0/image/upload/v1710833645/logo-ecoparque2_uulvsi.png"
              alt="Imagen 1"
              className="w-full h-full object-cover"
            />
          
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        className="relative overflow-hidden cursor-pointer border-2 border-white"
      >
        <Link href="/pagina-2">
        
            <img
              src="https://res.cloudinary.com/di1v23yy0/image/upload/v1710833645/logo-ecoparque2_uulvsi.png"
              alt="Imagen 2"
              className="w-full h-full object-cover"
            />
          
        </Link>
      </motion.div>

       <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        className="relative overflow-hidden cursor-pointer border-2 border-white"
      >
        <Link href="/pagina-2">
          
            <img
              src="https://res.cloudinary.com/di1v23yy0/image/upload/v1710833645/logo-ecoparque2_uulvsi.png"
              alt="Imagen 3"
              className="w-full h-full object-cover"
            />
          
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        className="relative overflow-hidden cursor-pointer border-2 border-white"
      >
        <Link href="/pagina-2">
          
            <img
              src="https://res.cloudinary.com/di1v23yy0/image/upload/v1710833645/logo-ecoparque2_uulvsi.png"
              alt="Imagen 4"
              className="w-full h-full object-cover"
            />
          
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;
