import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Estudiante from './Estudiante';
import Tabla from './Tabla';
import reportWebVitals from './reportWebVitals';

let info = {
   nombre: "Mateo", 
    apellido : "Aliberti",
    edad : "21",
    numeroLegajo : "28771",
    carrera : "Licenciatura en Sistemas",
    materias: [
      { materia: "Sistemas y Organizaciones", hora: "6 horas semanales" },
      { materia: "Base de datos 1", hora: "6 horas semanales" },
      { materia: "Orientación a Objetos 2", hora: "6 horas semanales"},
      { materia: "Ingeniería de Software 2", hora: "6 horas semanales"},
    ],
};

ReactDOM.render(
  <React.StrictMode>
    <Estudiante estudiante = {info}></Estudiante>
    
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
