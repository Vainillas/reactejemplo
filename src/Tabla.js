import React, { Component } from 'react'
import "./Tabla.css"
export default class Tabla extends Component{
    constructor(props){
        super(props);
      }
    render(){
        return (
            <div>
        <table className='estiloTabla'>
        <tr>
            <th>Curso</th>
            <th>Cantidad de Horas</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
        </tr>
        </table>
        </div>
        )
    }
}