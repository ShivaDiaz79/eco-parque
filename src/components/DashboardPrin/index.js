import React, { useEffect, useState } from 'react';
import { firestore } from "@/utilss/firebase";

const DashboardPrin = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const consultasSnapshot = await firestore.collection('consultasVendedor').get();
        const consultasData = consultasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setConsultas(consultasData);
      } catch (error) {
        console.error('Error al obtener las consultas:', error);
      }
    };

    fetchConsultas();
  }, []);

  const asignarVendedorAleatorio = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        {consultas.map(consulta => (
          <div key={consulta.id} className="border border-gray-300 p-4 rounded">
            <h3 className="text-xl mb-2">Consulta ID: {consulta.id}</h3>
            <p>Nombre: {consulta.nombre}</p>
            <p>Celular: {consulta.celular}</p>
            <p>Email: {consulta.email}</p>
            <p>Lote: {consulta.lote} metros</p>
            <p>Presupuesto: {consulta.presupuesto}</p>
            <p>Vendedor asignado: {asignarVendedorAleatorio()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPrin;
