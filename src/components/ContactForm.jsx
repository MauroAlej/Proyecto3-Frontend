import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function ContactForm() {
const { handleSubmit, control, formState: { errors } } = useForm();

const onSubmit = async (data) => {
  try {
    const response = await fetch('http://localhost:2020/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
  }
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <Controller
          name="nombre"
          control={control}
          rules={{ required: 'Este campo es requerido' }}
          render={({ field }) => <input {...field} className="form-control" />}
        />
        {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <Controller
          name="telefono"
          control={control}
          rules={{ required: 'Este campo es requerido' }}
          render={({ field }) => <input {...field} className="form-control" />}
        />
        {errors.telefono && <span className="text-danger">{errors.telefono.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Este campo es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Dirección de correo inválida'
            }
          }}
          render={({ field }) => <input {...field} type="email" className="form-control" />}
        />
        {errors.email && <span className="text-danger">{errors.email.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <Controller
          name="mensaje"
          control={control}
          rules={{ required: 'Este campo es requerido' }}
          render={({ field }) => <textarea {...field} className="form-control" rows="4" />}
        />
        {errors.mensaje && <span className="text-danger">{errors.mensaje.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default ContactForm;