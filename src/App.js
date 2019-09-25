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
import { RegisterDirection } from './App/RegisterComponent/RegisterDirection';
import { UsuFrec } from './App/ListComponet/UsuFrec';

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
          <Route path="/direccion" component={DirectionView}/>
          <Route path="/usuariosFrec" component={ListUsuFrec}/>

        </div>
      </Router>
    );
  }

}

const LoginView = () => (
  <div>
    <Login />
  </div>
);

const RegisterView = () => (
  <div>
    <Register />
  </div>
);
const RegistroParqueaderoView = () => (
  <div>
    <RegisterParking />
  </div>
);
const RegistroParqueadero2View = () => (
  <div>
    <RegisterParking2 />
  </div>
);

const MapView = () => (
  <div>
    <Map />
  </div>
);

const ListView = () => (
  <div>
    <List />
  </div>
);

const DirectionView = () => (
  <div>
    <RegisterDirection />
  </div>
);

const ListUsuFrec = () => (
  <div>
    <UsuFrec />
  </div>
);



export default App;
