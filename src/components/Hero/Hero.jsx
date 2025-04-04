import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('#services');
  };

  return (
    <div className="bg-gradient-to-bl from-emerald-800 to-emerald-200 px-6 py-10 md:px-8 md:py-32 md:h-[60vh]">
      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center h-full border-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-5 md:w-[46%] md:px-8 md:absolute md:left-0 md:top-13 z-20 border-2"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mantén tu <span className="text-primary">carrito</span> siempre limpiecito
          </motion.h1>
          
          <motion.p
            className="text-gray-600 text-lg mb-8"
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
              className="flex items-center font-bold text-primary hover:text-[#2a4a8a] transition-colors"
            >
              Escoge tu servicio
              <ArrowRight className="ml-2" size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center md:w-auto md:absolute md:right-0 md:bottom-0 border-2 border-amber-300"
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