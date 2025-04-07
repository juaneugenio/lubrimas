import React from 'react';
import { motion } from 'framer-motion';
import { brands } from './brandsData';

const Brands = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Marcas que atendemos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos con todas las marcas de vehículos para garantizar un servicio de calidad
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              className="flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={`/${brand.logo}`}
                alt={`${brand.name} logo`} 
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;