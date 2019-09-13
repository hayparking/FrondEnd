import React,{ Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input } from '@material-ui/core';


class ListaP extends Component {
  render() {
    return(
      <div className="panel panel-primary">
        <div class="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Nombre:{this.props.Nombre}</h3>
            <div className="panel-body">
              Direccion:{this.props.Direccion}
              <div>Cupos:{this.props.Cupos}</div>
            </div>
            <button>Ingresar</button>
          </div>
          <div><br/></div>
        </div>
      </div>      
    )
  }
}
export default ListaP;
