import React, { Component } from 'react';
import { GoogleMaps, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '50%'
};

export class Map extends Component {
  render() {
    return(
      <div className="panel panel-primary">
        <div align="center">
          <h1>HayParking</h1>
        </div>

          <div id="fechayhora">
            <p>Fecha y hora:</p>
              <input id="fecha" type="date" name="fecha" min="2018-03-25" max="2020-05-25" step="2"/>
              <input id="hora" type="time" name="hora" min="02:00" max="21:00" step="900"/>
              <br/>
          </div>
          <br/>
          <div id="opciones" align="center">
            <button>Lista Parqueaderos</button>
            <button onClick={this.firstExample}> Reservar</button>
          </div>
          <br/>
          <div id="div">
          <GoogleMaps
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
               lat: -1.2884,
               lng: 36.8233
              }}
            />
          </div>
          <div id="Map"></div>
          <br/>
          <br/>


      </div>
    )
  };

  firstExample(){
  		  var left = (window.screen.width ) ;
             var top = (window.screen.height ) ;
  		  var newWindow = window.open('', '','width=212, height=257');
  		  newWindow.document.write('<div align="center"><h3>Tipo de vehículo</h3><div><p>¿Qué tipo de vehículo vas a utilizar hoy?</p><input type="radio" name="transporte" value="1">Carro<br><input type="radio" name="transporte" value="2">Moto<br><input type="radio" name="transporte" value="3">Bicicleta</div><br><br><div><button onmouseover = window.close()>Reservar</button></div></div>');
  };



}
