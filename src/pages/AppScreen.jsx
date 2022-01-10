import React from "react";
import { useSelector } from "react-redux";
import FormAdd from "../components/FormAdd";
import NavBar from "../components/NavBar";
import Element from "../components/Element";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);

  const data = useSelector((state) => state.nomina.data);

  return (
    <>
      <NavBar />

      <div className="container animate__animated animate__backInUp">
        <h1 className="center">Hola {name}</h1>
        <hr />

        <FormAdd />

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Borrar</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elemento) => {
              return (
                <tr
                  className="animate__animated animate__fadeInUp "
                  key={elemento.id}
                >
                  <Element data={elemento} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
