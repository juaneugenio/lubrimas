import React, { useState } from 'react';
import { MapPin, Copy, X, Check } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const address = 'Calle Santos Alarcón y Av. Anibal Granja, Sector Huachi El Progreso, Ambato, Ecuador';
  const telephone = "+593 99 827 8268";
  const googleMapsFormattedAddress = 'Calle Santos Alarcón 22 y Avenida Anibal Granja, Ambato, Ecuador';
  const addressCoordinates = "-1.285857, -78.627475";

  const handlePhoneClick = () => {
    window.location.href = `tel:${telephone}`;
  };

  const handleAddressClick = () => {
    setIsOpen(true);
  };

  const copyAddress = () => {
    const textToCopy = googleMapsFormattedAddress;
    
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => showCopySuccess())
        .catch(() => fallbackCopy(textToCopy));
    } else {
      fallbackCopy(textToCopy);
    }
  };

  const fallbackCopy = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      showCopySuccess();
    } catch (err) {
      toast.error('Error al copiar', { position: 'bottom-center' });
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const showCopySuccess = () => {
    setCopied(true);
    toast.success('¡Dirección copiada!', { position: 'bottom-center', duration: 2000 });
    setTimeout(() => setCopied(false), 1500);
  };

  const openMaps = (isApple) => {
    const url = isApple
      ? `http://maps.apple.com/?daddr=${addressCoordinates}&dirflg=d`
      : `https://www.google.com/maps/dir/?api=1&destination=${addressCoordinates.replace(/\s/g, '')}&travelmode=d`;
    
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <div className='flex text-amber-50 bg-blue-950/90 backdrop-blur-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] w-full'>
        {/* Contact Section */}
        <div className="flex-1 flex flex-col items-end py-4 pr-4 border-r border-t border-gray-300 cursor-pointer group hover:bg-blue-900 transition-colors duration-500 ease-in-out" onClick={handlePhoneClick}>
          <h3 className="font-bold mb-1.5 text-amber-50 group-hover:text-orange-500 transition-colors duration-300 ease-in-out">Contáctanos</h3>
          <span className='no-underline md:text-lg hover:underline text-amber-50 group-hover:text-orange-500 transition-colors duration-300 ease-in-out'>{telephone}</span>
        </div>

        {/* Ubication Section */}
        <div className="flex-1 flex flex-col items-start pl-4 py-4 pr-2 border-t border-gray-300 cursor-pointer group hover:bg-blue-900 transition-colors duration-300 ease-in-out" onClick={handleAddressClick}>
          <h3 className="font-bold mb-1.5 text-amber-50 group-hover:text-orange-500 transition-colors duration-300 ease-in-out">Visítanos</h3>
          <span className="text-sm md:text-lg max-w-md mb-3 text-amber-50 group-hover:text-orange-500 transition-colors duration-300 ease-in-out">{address}</span>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-lg font-bold">Seleccione</Dialog.Title>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            <div className="space-y-3">
              <button onClick={copyAddress} className={`flex items-center w-full p-3 rounded cursor-pointer transition-colors ${copied ? 'bg-green-100 text-green-700' : 'hover:bg-orange-500 active:bg-orange-700'}`}>
                {copied ? (
                  <>
                    <Check size={16} className="mr-2" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-2" />
                    <span>Copiar dirección</span>
                  </>
                )}
              </button>
              <button onClick={() => openMaps(false)} className="flex items-center w-full p-3 hover:bg-orange-500 active:bg-orange-700 rounded cursor-pointer transition-colors">
                <MapPin size={16} className="text-md mr-2" />
                Abrir en Google Maps
              </button>
              <button onClick={() => openMaps(true)} className="flex items-center w-full p-3 hover:bg-orange-500 active:bg-orange-700 rounded cursor-pointer transition-colors">
                <MapPin size={16} className="mr-2" />
                Abrir en Apple Maps
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default Nav;