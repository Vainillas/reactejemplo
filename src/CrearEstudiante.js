import React, { Component } from "react";

export default class CrearEstudiante extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        edad: "",
        numeroLegajo: "",
        carrera: "",
        materia: "",
      },
      resultado: "",
      materias: [],
    };
  }
  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;
    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        edad: this.state.form.edad,
        numeroLegajo: this.state.form.numeroLegajo,
        carrera: this.state.form.carrera,
        materia: [this.state.form.materia],
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          resultado: "El estudiante fue creado con éxito",
        });
      });
  }
  componentDidMount() {
    fetch("http://localhost:1234/materias")
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          materias: json.materias,
        });
      });
  }

  render() {
    return (
      <div>
        <form>
          <select name="materia">
            {this.state.materias.map((m) => (
              <option value={m.materia}>{m.materia}</option>
            ))}
          </select>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              value={this.state.form.nombre}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Apellido
            <input
              type="text"
              name="apellido"
              value={this.state.form.apellido}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Edad
            <input
              type="number"
              name="edad"
              value={this.state.form.edad}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Numero de Legajo
            <input
              type="number"
              name="numeroLegajo"
              value={this.state.form.numeroLegajo}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Carrera
            <input
              type="text"
              name="carrera"
              value={this.state.form.carrera}
              onChange={this.handleChange}
            ></input>
          </label>
          <button onClick={this.handleSubmit} type="submit">
            Enviar
          </button>
        </form>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
