import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('#services');
  };

  return (
    <div className="bg-gradient-to-br from-gray-400 via-gray-100 to-blue-200 px-4 py-10 md:px-6 md:h-[50vh] lg:h-[70vh]">
      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center h-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-5 md:w-[450px] md:absolute md:left-0 md:top-13 lg:w-[550px] lg:top-8 z-20"
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 md:text-6xl md:pt-0 lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mantén tu <span className="text-primary">carrito</span> siempre limpiecito
          </motion.h1>
          
          <motion.p
            className="text-gray-500 text-lg mb-8 md:text-xl md:w-78"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Servicios profesionales de lavado y mantenimiento vehicular
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={handleServicesClick}
              className="flex items-center font-bold p-0 bg-transparent border-none text-primary hover:text-blue-600 cursor-pointer transition-colors text-lg lg:text-2xl"
            >
              Escoge tu servicio
              <ArrowRight className="ml-2 text-primary hover:text-orange-600 cursor-pointer" size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center md:max-w-[500px] md:absolute md:right-0 md:bottom-10 lg:max-w-3/4 lg:bottom-25 lg:right-5"
        >
          <img 
            src="/images/hero-car.webp" 
            alt="Carro azul limpio" 
            className="w-full h-auto max-h-[180px] md:max-h-[420px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;