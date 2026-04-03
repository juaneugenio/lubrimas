import React from "react";
import { motion as Motion } from "framer-motion";
import { brands } from "./brandsData";

// Change the export to be lazy-load compatible
const Brands = () => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.alt = `${e.target.alt} (🚗)`;
    e.target.style.display = "none";
    const fallback = document.createElement("div");
    fallback.textContent = "🚗";
    fallback.className = "text-4xl";
    e.target.parentNode.appendChild(fallback);
  };

  return (
    <section className="py-8 bg-sky-400 opacity-90 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Marcas que atendemos
          </h2>
          <p className="text-lg text-blue-950 max-w-2xl mx-auto">
            Trabajamos con todas las marcas de vehículos para garantizar un
            servicio de calidad
          </p>
        </div>

        <div className="grid grid-cols-3 pb-10 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
          {brands.map((brand) => (
            <Motion.div
              key={brand.id}
              className="flex flex-col items-center p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-sky-500"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-auto max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              <span className="text-xs mt-1 text-sky-300 font-semibold">
                {brand.name}
              </span>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Brands); // Wrap with React.memo for performance
