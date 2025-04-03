import { useForm } from 'react-hook-form';

export default function ReservationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí enviarías el email
  };

  return (
    <div id='reservation' className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Haga su Reserva</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Nombre</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span>Este campo es requerido</span>}
        </div>

        <div>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Email inválido</span>}
        </div>

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}