import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Calendar, User, Mail, MessageSquare } from "lucide-react";

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const WHATSAPP_NUMBER = "593900000000"; // Reemplaza con tu número real (formato internacional)

  const onSubmit = (data) => {
    // Formatear mensaje para WhatsApp
    const message =
      `Hola Lubrimas! Quisiera realizar una reserva:%0A` +
      `- *Nombre:* ${data.name}%0A` +
      `- *Email:* ${data.email}%0A` +
      `- *Servicio:* ${data.service}%0A` +
      `- *Mensaje:* ${data.message || "Sin mensaje adicional"}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="reservation"
      className="py-16 md:py-24 bg-gray-50 overflow-hidden px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Haga su Reserva
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete sus datos y nos pondremos en contacto de inmediato.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 lg:gap-x-10 w-full"
        >
          <div className="flex flex-col space-y-2 min-w-0">
            <label
              htmlFor="name"
              className="flex items-center text-sm font-bold text-gray-700"
            >
              <User className="w-4 h-4 mr-2 text-primary-color" /> Nombre
              Completo
            </label>
            <input
              id="name"
              {...register("name", { required: "El nombre es obligatorio" })}
              className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition-all focus:ring-2 focus:ring-primary-color/40 focus:border-primary-color ${errors.name ? "border-red-500" : "border-gray-300"}`}
              placeholder="Ej. Juan Pérez"
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2 min-w-0">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-bold text-gray-700"
            >
              <Mail className="w-4 h-4 mr-2 text-primary-color" /> Correo
              Electrónico
            </label>
            <input
              id="email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition-all focus:ring-2 focus:ring-primary-color/40 focus:border-primary-color ${errors.email ? "border-red-500" : "border-gray-300"}`}
              placeholder="correo@ejemplo.com"
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="md:col-span-2 flex flex-col space-y-2 min-w-0">
            <label
              htmlFor="service"
              className="flex items-center text-sm font-bold text-gray-700"
            >
              <Calendar className="w-4 h-4 mr-2 text-primary-color" /> Servicio
            </label>
            <select
              id="service"
              {...register("service", { required: "Seleccione un servicio" })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none transition-all focus:ring-2 focus:ring-primary-color/40 focus:border-primary-color appearance-none"
            >
              <option value="">Seleccione un servicio...</option>
              <option value="Lavado Completo">Lavado Completo</option>
              <option value="Cambio de Aceite">Cambio de Aceite</option>
              <option value="Pulido y Encerado">Pulido y Encerado</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col space-y-2 min-w-0">
            <label
              htmlFor="message"
              className="flex items-center text-sm font-bold text-gray-700"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-primary-color" />{" "}
              Mensaje Opcional
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none transition-all focus:ring-2 focus:ring-primary-color/40 focus:border-primary-color resize-none"
              placeholder="¿Algún detalle especial sobre su vehículo?"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="md:col-span-2 bg-primary-color hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all mt-4"
          >
            <Send className="w-5 h-5" /> Enviar Reserva por WhatsApp
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
