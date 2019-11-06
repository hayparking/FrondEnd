import React from 'react';
import {Grid, CssBaseline, Button, CardContent, Typography, Card} from '@material-ui/core';
import './Profile.css';
import {Link} from "react-router-dom";
import Exit from "@material-ui/core/SvgIcon/SvgIcon";
import axios from 'axios';

export default {
  // ...
}

axios.get("localhost")
  .then(response => {
    // Obtenemos los datos
  })
  .catch(e => {
    // Capturamos los errores
  })
const cupos = 'listasParquederos';
const map='mapa';
const profile ="profile"

export class Reservar extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column">
                    <CssBaseline />
                    <Grid item lg={12}>
                        <h1>
                          Reservar
                        </h1>
                    </Grid>
                    <Grid item lg={12}>
                      <Card className="item" style={{position: "relative", width: '90%', marginLeft: "auto", marginRight: "auto"}}>
                        <CardContent>
                          <Typography color="textSecondary" gutterBottom>
                            Datos del Parqueadero
                          </Typography>
                          <Typography variant="h5" component="h5">
                            Parqueadero - Parque Simón Bolivar
                          </Typography>
                          <Typography variant="body1" component="p">
                            Cra. 59 #56-15
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card className="item" style={{position: "relative", width: '90%', marginLeft: "auto", marginRight: "auto"}}>
                        <CardContent>
                          <Typography color="textSecondary" gutterBottom>
                            Datos del Usuario
                          </Typography>
                          <Typography variant="body1" component="p">
                            <b>Tipo de Transporte:</b> Automovil <br/>
                            <b>Placa:</b> CVM668 <br/>
                            <b>Punto partida:</b> Calle 180bis #16-92 <br/>
                            <b>Vehívulo:</b> Mazda 3 Rojo <br/>
                            <b>Tiempo de uso (aprox.):</b> 2 horas <br/>
                          </Typography>
                        </CardContent>
                      </Card>
                      <div>
                        <Button variant="contained" color="primary" component={Link} to={profile} style={{marginRight: '5px'}}>
                          Reservar
                        </Button>
                        <Button variant="contained" component={Link} to={cupos}>
                          Cancelar
                        </Button>
                      </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };
}
