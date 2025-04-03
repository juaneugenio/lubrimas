import React from 'react'
import { useNavigate } from 'react-router-dom'
import { scrollToHash } from '../../utils/scrollToHash'

const Hero = () => {
    const navigate = useNavigate()

    const handleContactClick = () => {
        navigate('#contact');
        setTimeout(scrollToHash, 100); // Small delay to ensure navigation completes
    }

    const handleServicesClick = () => {
        navigate('#services');
        setTimeout(scrollToHash, 100);
    }

    return (
        <div className="bg-blue-600 text-white py-20 px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">LUBRIMAS</h1>
            <p className="text-xl mb-6">Servicios profesionales de lavado y mantenimiento vehicular</p>
            <div className="flex justify-center gap-4">
                <button 
                    onClick={handleContactClick}
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
                >
                    Contactar
                </button>
                <button 
                    onClick={handleServicesClick}
                    className="border-2 border-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Servicios
                </button>
            </div>
        </div>
    )
}

export default Hero