import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const dispatch = useDispatch();
  const [viewForm, serViewForm] = useState(false);

  const [cantidadPago, setCantidadPago] = useState({
    horas: 0,
    precioHora: 0,
  });
  const { horas, precioHora } = cantidadPago;
  const handleAdd = (e) => {
    e.preventDefault();
    serViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setCantidadPago({
      ...cantidadPago,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const cantFinal = horas * precioHora;
    dispatch(crearRegistro(cantFinal));
  };
  return (
    <div>
      <button className="btn green" onClick={handleAdd}>
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <>
          <input
            type="text"
            placeholder="Ingresa cantidad pago por hora"
            value={precioHora}
            onChange={handleChange}
            name="precioHora"
          />
          <input
            type="text"
            placeholder="Ingresa cantidad por pagar"
            value={horas}
            onChange={handleChange}
            name="horas"
          />
          <button onClick={handleSave} className="btn purple">
            Calcular y guardar
          </button>
        </>
      )}
    </div>
  );
};

export default FormAdd;
