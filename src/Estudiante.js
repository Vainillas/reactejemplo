import React, { Component } from 'react'
import "./Estudiante.css"
import "./Tabla.css"

export default class Estudiante extends Component {
    constructor(props){
      super(props);
      this.state = {
        estudiante: this.props.estudiante,
        materias: this.props.estudiante.materias,
        materiasTabla: [],
        nuevaMateria: {},
      };
    }
    handlerSubmit = () => {
      let { materias, materiasTabla } = this.state;
      if(materias.length != 0){
        let temp = materias.pop();
      materiasTabla.push(temp);
      this.setState({ materiasTabla: materiasTabla });
      }
      
    };
  render() {
    const {materiasTabla} = this.state;

    const renderMaterias = materiasTabla &&
    materiasTabla.map((materia, index) => {
      return (
        <tr key={index}>
          <td>{materia.materia}</td>
          <td>{materia.hora}</td>
        </tr>
      );
    });
    

    return (
      
      <div className='estilo'>
          <p className= 'item'>{this.props.estudiante.nombre  }</p>
          <p className= 'item'>{this.props.estudiante.apellido  }</p>
          <p className= 'item'>{this.props.estudiante.edad   }</p>
          <p className= 'item'>{this.props.estudiante.numeroLegajo }</p>
          <p className= 'item'>{this.props.estudiante.carrera }</p>
          <div>
          <button onClick={this.handlerSubmit
    }>Inscribirme</button>
          </div>
          <div>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          ></link>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Curso</th>
                <th scope="col">Cantidad de Horas Semanales</th>
              </tr>
            </thead>
            <tbody>{renderMaterias}</tbody>
          </table>
        </div>
          </div>

    )
  }
}
