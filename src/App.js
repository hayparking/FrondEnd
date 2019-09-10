import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import { Login } from './App/LoginComponet/Login';
import { Register } from './App/RegisterComponent/Register';
import logo from './logo.svg';
import './App.css';

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
          </BottomNavigation>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">HayParking</h1>
          </header>
          <div>
              <Route exact path="/" component={LoginView}/>
              <Route path="/todo" component={RegisterView}/>
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

export default App;
