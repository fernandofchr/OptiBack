import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <>
     <body>
      <div className="Appi">
        <h1 className="tittle">Fernando Login App</h1>
      </div>

     

        <div className="sentences">
          <h3>
            Introduzca su Correo o Usuario
          </h3>
        </div>

        <div className="lokio">
          <input name="myInput" placeholder="Correo o usuario" className="input" type="email"/>
        </div>

        <div className="sentences">
          <h3>
            Introduzca su Contraseña
          </h3>
        </div>

        <div className="lokio">
          <input name="myInput" placeholder="Contraseña" className="input" type="password"/>
        </div>

        <div className="Button">
          <Button variant="primary" href="#">Iniciar Sesión
          </Button>
        </div>

      </body>
    </>
  );
}

export default App;
