import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Importa firebase
import 'firebase/compat/firestore'; // Importa firestore

import { firestore } from "@/utilss/firebase";





const Consultation = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    lote: '',
    presupuesto: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const consultationRef = firebase.firestore().collection('consultasVendedor');
  
      // Guardar la consulta en Firebase con la hora de envío
      await consultationRef.add({
        nombre: formData.nombre,
        apellido: formData.apellido,
        celular: formData.celular,
        email: formData.email,
        lote: formData.lote,
        presupuesto: formData.presupuesto,
        horaEnvio: new Date(), // Guarda la hora actual
      });
  
      // Limpiar el formulario después de enviar la consulta
      setFormData({
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        lote: '',
        presupuesto: '',
      });
  
      // Mostrar un mensaje de éxito o redirigir a otra página si es necesario
      alert('Consulta enviada exitosamente.');
    } catch (error) {
      console.error('Error al enviar la consulta:', error);
      // Mostrar un mensaje de error o manejarlo de otra manera según sea necesario
      alert('Ocurrió un error al enviar la consulta. Por favor, inténtalo de nuevo.');
    }
  };
  
  return (
    <div className="max-w-md ms-16 p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl mb-6">Formulario de Consulta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-1">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block mb-1">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="celular" className="block mb-1">Celular:</label>
          <input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="lote" className="block mb-1">Seleccionar terreno:</label>
          <select id="lote" name="lote" value={formData.lote} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required>
            <option value="">Seleccionar...</option>
            <option value="300">300 metros</option>
            <option value="400">400 metros</option>
            <option value="500">500 metros</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="presupuesto" className="block mb-1">Presupuesto:</label>
          <input type="number" id="presupuesto" name="presupuesto" value={formData.presupuesto} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors">Enviar Consulta</button>
      </form>
    </div>
  );
};

export default Consultation;
