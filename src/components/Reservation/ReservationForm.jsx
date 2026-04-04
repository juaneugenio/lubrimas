import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const WHATSAPP_NUMBER = "593998278268";

  const onSubmit = (data) => {
    const text = `Hola Lubrimas! Quisiera realizar una reserva:
- *Nombre:* ${data.name}
- *Email:* ${data.email}
- *Teléfono:* ${data.phone}
- *Vehículo:* ${data.vehicleType}
- *Servicio:* ${data.service}
- *Fecha:* ${data.date}
- *Hora:* ${data.time}
- *Comentarios:* ${data.message || "Sin comentarios adicionales"}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const inputClass = (hasError) =>
    `w-full rounded-xl border ${
      hasError ? "border-red-400" : "border-sky-200"
    } bg-white/80 px-3.5 py-2.5 text-sm text-blue-950 placeholder:text-blue-900/40 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition`;

  return (
    <section
      id="reservation"
      className="py-12 sm:py-16 bg-green-100 rounded-2xl overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">
            Haga su reserva
          </h2>
          <p className="text-base sm:text-lg text-blue-950 max-w-2xl mx-auto">
            Agenda tu servicio de lavado o lubricación en pocos pasos.
          </p>
        </div>

        {/* Card */}
        <motion.div
          className="bg-sky-50/95 rounded-2xl shadow-lg border border-sky-100 px-4 py-6 sm:px-8 sm:py-8 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full min-w-0">
            {/* Columna izquierda */}
            <div className="lg:w-5/12 flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-3">
                  Reserva tu lavado en Lubrimás
                </h3>
                <p className="text-sm sm:text-base text-blue-900/80">
                  Haz clic en{" "}
                  <span className="font-semibold">“Contáctanos”</span> para
                  llamarnos directamente desde tu celular o en{" "}
                  <span className="font-semibold">“Visítanos”</span> para abrir
                  tu app de mapas y navegar hasta Lubrimás.
                </p>
                <p className="mt-3 text-sm sm:text-base text-blue-900/80">
                  También puedes escribirnos o llamarnos por WhatsApp al{" "}
                  <a
                    href="https://wa.me/593998278268?text=Hola%20quiero%20reservar%20un%20lavado%20en%20Lubrim%C3%A1s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-950 underline underline-offset-2 decoration-sky-400 hover:text-blue-900"
                  >
                    +593 99 827 8268
                  </a>
                </p>
                <p className="mt-3 text-sm sm:text-base text-blue-900/80  pt-3">
                  <span className="font-semibold">Horario de atención:</span>{" "}
                  <br />
                  lunes a sábado, de{" "}
                  <span className="font-semibold">8:00 a 18:00</span>
                </p>
              </div>

              {/* Textos que pediste mover aquí */}
              <div className="border-t border-sky-200 pt-4 space-y-1">
                <p className="text-xs text-blue-900/70">
                  *La hora puede ajustarse según la disponibilidad del taller.
                </p>
              </div>
            </div>

            {/* Columna derecha: formulario */}
            <div className="lg:w-7/12 min-w-0 w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full min-w-0"
              >
                {/* Nombre */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    {...register("name", {
                      required: "El nombre es obligatorio",
                    })}
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido",
                      },
                    })}
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1.5">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    {...register("phone", {
                      required: "El teléfono es obligatorio",
                    })}
                    type="tel"
                    placeholder="+593 99 999 9999"
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Tipo de vehículo */}
                <div>
                  <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1.5">
                    Tipo de vehículo
                  </label>
                  <select
                    {...register("vehicleType", {
                      required: "El tipo de vehículo es obligatorio",
                    })}
                    className={inputClass(errors.vehicleType)}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="auto-pequeno">Auto pequeño</option>
                    <option value="auto-mediano">Auto mediano</option>
                    <option value="camion">Camión</option>
                    <option value="moto">Motocicleta</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.vehicleType && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.vehicleType.message}
                    </p>
                  )}
                </div>

                {/* Servicio */}
                <div>
                  <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1.5">
                    Servicio
                  </label>
                  <select
                    {...register("service", {
                      required: "El servicio es obligatorio",
                    })}
                    className={inputClass(errors.service)}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Lavado rápido">Lavado rápido</option>
                    <option value="Lavado completo">Lavado completo</option>
                    <option value="Lavado de lujo">Lavado de lujo</option>
                    <option value="Lubricación">Lubricación</option>
                    <option value="Detailing interior">
                      Detailing interior
                    </option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Fecha */}
                <div>
                  <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1.5">
                    Fecha preferida
                  </label>
                  <input
                    {...register("date", {
                      required: "La fecha es obligatoria",
                    })}
                    type="date"
                    className={inputClass(errors.date)}
                  />
                  {errors.date && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                {/* Hora */}
                <div>
                  <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1.5">
                    Hora preferida
                  </label>
                  <input
                    {...register("time", {
                      required: "La hora es obligatoria",
                    })}
                    type="time"
                    className={inputClass(errors.time)}
                  />
                  {errors.time && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.time.message}
                    </p>
                  )}
                </div>

                {/* Comentarios */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1.5">
                    Comentarios adicionales
                  </label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    placeholder="Ej. Lavado especial para interior, remover pelos de mascota, etc."
                    className="w-full rounded-xl border border-sky-200 bg-white/80 px-3.5 py-2.5 text-sm text-blue-950 placeholder:text-blue-900/40 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition resize-none"
                  />
                </div>

                {/* Botón */}
                <div className="sm:col-span-2 mt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 rounded-lg bg-blue-950 text-sky-50 text-sm font-semibold shadow-md hover:bg-blue-900 transition"
                  >
                    Confirmar reserva vía WhatsApp
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
