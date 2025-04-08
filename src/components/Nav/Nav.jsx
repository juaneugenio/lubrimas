import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Nav = () => {
  const handlePhoneClick = () => {
    alert("Contact us via phone!");
    // You can replace this alert with a modal component for a better UI
  };

  const handleAddressClick = () => {
    const address = encodeURIComponent('Calle Santos Alarcón y Av. Anibal Granja, Huachi El Progreso, Ambato, Ecuador');
    
    // URL para Google Maps
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    
    // URL para Apple Maps
    const appleMapsUrl = `http://maps.apple.com/?daddr=${address}`;
    
    // Detectar dispositivo y abrir el mapa correspondiente
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const link = document.createElement('a');
    link.href = isIOS ? appleMapsUrl : googleMapsUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex w-full text-amber-50">
      {/* Contact Section */}
      <div
        className="flex-1 flex flex-col items-end pr-4 border-r border-t border-gray-300 cursor-pointer"
        onClick={handlePhoneClick} // Added onClick handler
      >
        <h4 className="text-sm md:text-md font-bold mb-1.5">Contáctanos</h4>
        <a href="tel:+593 99 827 8268" className='no-underline text-amber-50 md:text-lg hover:underline'>+593 99 827 8268</a>
      </div>

      {/* Ubication Section */}
      <div
        className="flex-1 flex flex-col items-start pl-4 pr-2 border-t border-gray-300 cursor-pointer"
        onClick={handleAddressClick} // Added onClick handler
      >
        <h4 className="text-sm md:text-md font-bold mb-1.5">Direccion</h4>
        <a className="text-sm md:text-lg max-w-md mb-3">Calle Santos Alarcón y Av. Anibal Granja. Sector Huachi El Progreso. Ambato, Ecuador</a>
      </div>
    </div>
  );
};

export default Nav;