import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';



export default function ListFrec() {
  return (
    <React.Fragment>
      <Title>Parqueaderos Frecuentes</Title>
      <Typography component="p" variant="h7">
                  NOMBRE......................................DIRECCIÓN<br/>
        Parqueadero - Parque Simón Bolivar-------------Direccion Cra. 59 #56-15<br/>
        PARQUEADERO PÚBLICO---------------------------Direccion Cl. 93 #14-29<br/>
        Parqueadero Público Aparcar Ltda-------------Direccion 11, Cra. 13 #50 A<br/>
        Parqueadero-------------------------------------------Direccion Cra. 13 #40A-17<br/>
        Parqueadero Privado de la Clínica Marly-----------Direccion "16, Cl. 50 #9<br/>
        Parqueadero------------------------------------------------Direccion Cl. 53 #1060<br/>
        parking----------------------------------------------------------------Direccion Cl. 63<br/>
      </Typography>
    </React.Fragment>
  );
}
