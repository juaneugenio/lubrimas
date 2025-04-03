import React from 'react'
import { FaCar, FaOilCan, FaShoppingCart } from 'react-icons/fa'

const Services = () => {
    return (
        <div id="services" className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Wash Services */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-blue-500 text-4xl mb-4">
                        <FaCar />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Lavado de Vehículos</h3>
                    <ul className="space-y-2">
                        <li>• Autos pequeños</li>
                        <li>• Autos medianos</li>
                        <li>• Camiones</li>
                        <li>• Motocicletas</li>
                    </ul>
                </div>

                {/* Maintenance */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-blue-500 text-4xl mb-4">
                        <FaOilCan />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mantenimiento</h3>
                    <ul className="space-y-2">
                        <li>• Cambio de aceite</li>
                        <li>• Cambio de filtros</li>
                        <li>• Lubricación</li>
                        <li>• Diagnóstico</li>
                    </ul>
                </div>

                {/* Products */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-blue-500 text-4xl mb-4">
                        <FaShoppingCart />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Productos</h3>
                    <ul className="space-y-2">
                        <li>• Aceites premium</li>
                        <li>• Filtros originales</li>
                        <li>• Lubricantes</li>
                        <li>• Productos de limpieza</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services