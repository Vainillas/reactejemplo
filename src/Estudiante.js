import React, { Component } from 'react'
import "./Estudiante.css"

export default class Estudiante extends Component {
  render() {
      let nombre = "Mateo";
      let apellido = "Aliberti";
      let edad = 21;
      let numeroLegajo = 28771;
      let carrera = "Licenciatura en Sistemas";
    return (
      <div className='estilo'>
        
          <header className= 'header'>
          <p>{"Apellido: " + apellido + 
          " | Nombre: " + nombre +
          " | Edad: " + edad + " años" +
          " | Nro. Legajo: " + numeroLegajo +
          " | Carrera: " + carrera}</p>
          </header>
          </div>
    )
  }
}
