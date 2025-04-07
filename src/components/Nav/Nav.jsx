import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Nav = () => {
  return (
    <div className="relative flex w-full pb-4 text-amber-50">
      {/* First Section */}
      <div className="flex-1 flex flex-col items-end pr-4 border-r border-t border-gray-300 cursor-pointer">
        <h4 className="text-sm md:text-md font-bold leading-none -mb-2">Contáctanos</h4>
        <p className="text-[16px] md:text-sm leading-none"><strong>Telf:</strong> 00293823234234</p>
      </div>

      {/* Second Section */}
      <div className="flex-1 flex flex-col pl-4 border-t border-gray-300 cursor-pointer">
        <h4 className="text-sm md:text-md font-bold leading-none -mb-2">Estamos ubicados</h4>
        <p className="text-[16px] md:text-sm leading-none">Calle Loja y Av. Roman, Huachi El Progreso</p>
      </div>
    </div>
  );
};

export default Nav;