import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import { Login } from './App/LoginComponet/Login';
import { Register } from './App/RegisterComponent/Register';
import { RegistroPar1 } from './App/RegisterComponent/RegistroPar1';
import { RegistroParqueadero2 } from './App/RegisterComponent/RegistroParqueadero2';
import logo from './logo.svg';
import './App.css';

import ListaP from './App/RegisterComponent/ListaP';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: '', priority: 0, dueDate: moment()};
    //this.handleTextChange = this.handleTextChange.bind(this);
    //this.handlePriorityChange = this.handlePriorityChange.bind(this);
    //this.handleDateChange = this.handleDateChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <BottomNavigation showLabels className="">
              <BottomNavigationAction label="Login" icon={<LockOpenIcon />} component={Link} to="/" />
              <BottomNavigationAction label="Register" icon={<AssignmentRoundedIcon />} component={Link} to="/todo" />
			        <BottomNavigationAction label="Registro_Parqueadero" icon={<AssignmentRoundedIcon />} component={Link} to="/parqueadero" />
              <BottomNavigationAction label="Lista parqueaderos" icon={<AssignmentRoundedIcon />} component={Link} to="/lista" />
          </BottomNavigation>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">HayParking</h1>
          </header>
          <div>
              <Route exact path="/" component={LoginView}/>
              <Route path="/todo" component={RegisterView}/>
              <Route path="/parqueadero" component={RegistroPar1View}/>
              <Route path="/parqueadero2" component={RegistroParqueadero2View}/>
              <Route path="/lista" component={listaView}/>

          </div>
        </div>
      </Router>
    );
  }

}

const LoginView = () => (
  <div>
      <Login />
      <br/>
      <br/>
  </div>
);

const RegisterView = () => (
  <div>
      <br/>
      <br/>
      <Register />
  </div>
);
const RegistroPar1View = () => (
  <div>
      <br/>
      <br/>
      <RegistroPar1 />
  </div>
);
const RegistroParqueadero2View = () => (
  <div>
      <br/>
      <br/>
      <RegistroParqueadero2 />
  </div>
);

const listaView = () => (
  <div>
    <h1 className="App-title">Lista de Parqueaderos </h1>
    <br/>
    <br/>
    <ListaP Nombre="Parqueadero - Parque Simón Bolivar " Direccion="Cra. 59 #56-15 " Cupos=" 7"/>
    <ListaP Nombre="PARQUEADERO PÚBLICO " Direccion="Cl. 93 #14-29 " Cupos=" 7"/>
        <ListaP Nombre="Parqueadero Público Aparcar Ltda" Direccion="11, Cra. 13 #50 A " Cupos=" 7"/>
        <ListaP Nombre="Parqueadero" Direccion="Cra. 13 #40A-17 " Cupos=" 9"/>
        <ListaP Nombre="Parqueadero Privado de la Clínica Marly" Direccion="16, Cl. 50 #9 " Cupos=" 4"/>
        <ListaP Nombre="Parqueadero" Direccion="Cl. 53 #1060 " Cupos=" 7"/>
        <ListaP Nombre="parking" Direccion="Cl. 63 " Cupos=" 3"/>
        <ListaP Nombre="Parqueadero Publico Eli García" Direccion="10, esquina con Carrera 8, Cl. 49 #7 " Cupos=" 2"/>
        <ListaP Nombre="Parqueadero publico" Direccion="a 49-99, Cra. 13 #491 " Cupos=" 1"/>
        <ListaP Nombre="Parqueadero La 51" Direccion="79, Cra. 13 #51 " Cupos=" 7"/>
        <ListaP Nombre="Parqueadero Exito Cafam Cl 51" Direccion="Cl. 51 #1560 " Cupos=" 0"/>
        <ListaP Nombre="parqueadero público" Direccion="85, Cra. 16 #39 A " Cupos=" 3"/>
        <ListaP Nombre="Parqueadero Cl48" Direccion="Cl. 48 #976 " Cupos=" 2"/>
        <ListaP Nombre="Parking" Direccion="11, Cra. 52 #24" Cupos=" 1"/>
        <ListaP Nombre="Parqueadero 24 Horas Cl55" Direccion="Cra. 13 #21 " Cupos=" 8"/>
        <ListaP Nombre="Parqueadero Autolemus" Direccion="Cl. 64 #11-31 " Cupos=" 9"/>
        <ListaP Nombre="Parqueadero Público Parking" Direccion="51, Cl. 52 #7 " Cupos=" 1"/>
        <ListaP Nombre="Parqueadero Público Park Elite S.A" Direccion="53, Cra. 7 #52 " Cupos=" 8"/>
        <ListaP Nombre="Parqueadero J.S.L." Direccion="Cra. 7 #41-45 " Cupos=" 9"/>
        <ListaP Nombre="     " Direccion="calle " Cupos=" 1"/>
        <ListaP Nombre="     " Direccion="calle " Cupos=" 8"/>
        <ListaP Nombre="     " Direccion="calle " Cupos=" 9"/>
  </div>
);


export default App;
