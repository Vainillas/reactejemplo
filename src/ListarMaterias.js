import React, { Component } from "react";

export default class listarMaterias extends Component {
  constructor(props) {
    super(props);
    this.listarMaterias = this.listarMaterias.bind(this);
    this.limpiar = this.limpiar.bind(this);
    this.state = {
      materias: [],
    };
  }
  listarMaterias() {
    fetch("http://localhost:1234/materias")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          materias: json.materias,
          resultado: json.result,
        });
      });
  }
  limpiar() {
    this.setState({
      materias: [],
    });
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.listarMaterias}>Listar materias</button>
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
                <th>Nombre Materia</th>
              </tr>
            </thead>
            <tbody>
              {this.state.materias &&
                this.state.materias.map((m, index) => {
                  return (
                    <tr key={index}>
                      <td>{m.materia}</td>
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
