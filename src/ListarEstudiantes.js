import React, { Component } from "react";

export default class ListarEstudiantes extends Component {
  constructor(props) {
    super(props);
    this.limpiar = this.limpiar.bind(this);
    this.listarEstudiantes = this.listarEstudiantes.bind(this);
    this.listarEstudiantesPorLegajo =
      this.listarEstudiantesPorLegajo.bind(this);
    this.numeroLegajo = 0;
    this.state = {
      estudiantes: [],
    };
  }
  listarEstudiantes() {
    fetch("http://localhost:1234/estudiantes")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          estudiantes: json.estudiantes,
          resultado: json.result,
        });
      });
  }
  listarEstudiantesPorLegajo() {
    const { numeroLegajo } = this.state;
    fetch("http://localhost:1234/estudiantesId?numeroLegajo=" + numeroLegajo)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          estudiantes: json.estudiantes,
          resultado: json.result,
        });
      });
  }
  limpiar() {
    const { estudiantes } = this.state;
    this.setState({ estudiantes: [] });
  }
  handlerChange = (event) => {
    const { value } = event.target;
    let { numeroLegajo } = this.state;
    numeroLegajo = value;
    this.setState({ numeroLegajo: numeroLegajo });
  };
  render() {
    return (
      <div>
        <div>
          <label>Ingresar Legajo:</label>
          <br />
          <input name="numeroLegajo" onChange={this.handlerChange}></input>
          <br />
          <button onClick={this.listarEstudiantesPorLegajo}>
            Listar estudiantes por legajo
          </button>
          <br />
          <button onClick={this.listarEstudiantes}>
            Listar a todos los estudiantes
          </button>
          <br />
          <button onClick={this.limpiar}>Limpiar</button>
          <br />
          <hr />
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
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Numero de legajo</th>
                <th>Carrera</th>
                <th>Materias</th>
              </tr>
            </thead>
            <tbody>
              {this.state.estudiantes &&
                this.state.estudiantes.map((e, index) => {
                  return (
                    <tr key={index}>
                      <td>{e.nombre}</td>
                      <td>{e.apellido}</td>
                      <td>{e.edad}</td>
                      <td>{e.numeroLegajo}</td>
                      <td>{e.carrera}</td>
                      <td>
                        {e.materias &&
                          e.materias.map((mat) => {
                            return mat.materia + ",";
                          })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
