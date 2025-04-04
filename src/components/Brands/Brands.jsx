import React from 'react'
import { motion } from 'framer-motion'
import { brands } from './brandsData'

const Brands = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-700 mb-8">Trabajamos con una amplia gama de vehículos</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="flex justify-center items-center"
            >
              <motion.div 
                className="h-24 flex items-center justify-center border border-gray-200 rounded-lg p-2"
                whileHover={{
                  scale: 1.1,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className='object-contain h-full w-full'
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands