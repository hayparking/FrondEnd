import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login }  from './App/LoginComponet/Login';
import { Register } from './App/RegisterComponent/Register';
import './App.css';

import { List } from './App/ListComponet/List';
import { Map } from "./App/MapComponet/Map";
import { RegisterParking2 } from './App/RegisterComponent/RegisterParking2';
import { RegisterParking } from './App/RegisterComponent/RegisterParking';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: '', priority: 0, dueDate: moment()};
  }

  render() {
    return (
      <Router>
        <div className="App">          
          <Route exact path="/" component={LoginView}/>
          <Route path="/register" component={RegisterView}/>
          <Route path="/parqueadero" component={RegistroParqueaderoView}/>
          <Route path="/parqueadero2" component={RegistroParqueadero2View}/>
          <Route path="/listasParquederos" component={ListView}/>
          <Route path="/mapa" component={MapView}/>
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
const RegistroParqueaderoView = () => (
  <div>
    <br/>
    <br/>
    <RegisterParking />
  </div>
);
const RegistroParqueadero2View = () => (
  <div>
    <br/>
    <br/>
    <RegisterParking2 />
  </div>
);

const MapView = () => (
  <div>
    <br/>
    <br/>
    <Map />
  </div>
);

const ListView = () => (
  <div>
    <h1 className="App-title">Lista de Parqueaderos </h1>
    <br/>
    <br/>
    <List />
  </div>
);


export default App;
