import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



export default function LugaresFrec() {
  return (
    <React.Fragment>
      <Typography variant="h3">Lugares Frecuentes</Typography>
      <Typography component="p" variant="h7">
      Centro Comercial Santafé<br/>
      Centro Comercial Cedritos 151<br/>
      Mazuren Centro Comercial<br/>
      Centro Comercial Palatino<br/>
      Centro Comercial Mediterráneo<br/>
      Centro Comercial Granada Hills<br/>
      Unicentro Bogotá<br/>
      Centro Comercial Cedritos 151<br/>
      Calima Centro Comercial Bogotá<br/>
      </Typography>
    </React.Fragment>
  );
}