import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { useNavPosition } from '../../hooks/useNavPosition';

const Hero = () => {
  const navigate = useNavigate();
  const { isFixed } = useNavPosition();

  const handleServicesClick = () => {
    navigate('#services');
  };

  return (
    <motion.header 
      className="hero-section relative h-[99dvh] w-full overflow-hidden rounded-2xl flex flex-col justify-center items-center mb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-carimg-bg.webp" 
          alt="Fondo de lavado de autos" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay semitransparente azul marino - Ajustado para mayor visibilidad */}
        <div className="absolute inset-0 bg-sky-950 opacity-80"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-5"
        >
          <motion.h1 
            className="text-4xl font-bold mb-6 md:text-6xl lg:text-7xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mantén tu <span className="text-primary-color">carrito</span> siempre limpiecito
          </motion.h1>
          
          <motion.p
            className="text-gray-200 text-lg mb-8 md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Servicios profesionales de lavado y mantenimiento vehicular
          </motion.p>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={handleServicesClick}
              className="flex items-center font-bold p-0 bg-transparent border-none text-primary-color hover:text-blue-300 cursor-pointer transition-colors text-lg lg:text-2xl mx-auto"
            >
              Escoge tu servicio
              <ArrowRight className="ml-2 text-primary-color hover:text-blue-300" size={20} />
            </button>
          </motion.nav>
        </motion.section>
      </div>

      {/* Nav positioned at the bottom */}
      <div className={`absolute ${isFixed ? 'fixed top-0 left-0 right-0' : 'bottom-0'} w-full z-50 transition-all duration-300`}>
        <Nav />
      </div>
    </motion.header>
  );
};

export default Hero;