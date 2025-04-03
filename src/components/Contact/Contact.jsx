import React from 'react'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
const Contact = () => {
    return (
        <div className="bg-gray-800 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contáctenos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-blue-400" />
                            <p>Barrio Huachi el Progreso, Ambato, Ecuador</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-blue-400" />
                            <p>099 8234 5678</p>
                        </div>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Horario de atención</h3>
                        <p className="mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                        <p>Sábados: 9:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact