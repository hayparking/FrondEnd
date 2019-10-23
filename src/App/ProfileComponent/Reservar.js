import React from 'react';
import { Grid, CssBaseline, Button, CardContent, Typography} from '@material-ui/core';
import './Profile.css';


const cupos = 'listasParquederos';
const map='mapa';

export class Reservar extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column" className="ListBackground">
                    <CssBaseline />
                    <Grid item lg={12}>
                        <div className="ListTitle">
                          Reservar
                        </div>
                    </Grid>
                    <Grid item lg={12}>
                    <CardContent>
                    <Typography variant="h5" component="h2">
                      Confirme los datos antes de continuar
                    </Typography>
                    <br/><br/><br/>
                      <Typography variant="h5" component="h2">
                        Datos del Parqueadero
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Nombre parqueadero:Parqueadero Autolemus
                        <br/>
                        Direccion: Cl. 64 #11-31
                        <br/>
                        Cupos: 9
                      </Typography>
                      <br/><br/><br/><br/>
                      <Typography variant="h5" component="h2">
                        Datos del Usuario
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Tipo de Transporte: carro<br/>
                        Placa: CVM668<br/>
                        Punto partida:calle 180bis #16-92<br/>
                        Punto Llegada:Cl. 64 #11-31<br/>
                        Descripccion del medio de transporte: carro rojo marca chevrolet<br/>
                        Tiempo Aroxdimado de uso:2 horas<br/>
                      </Typography>
                    </CardContent>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                        <Grid container>
                            <Grid item sm={false} md={2}></Grid>
                            <Grid item sm={12} md={8}>

                            <Grid container>
                                <Grid item md={5}>
                                <Button type="submit" fullWidth variant="contained" color="black" className="submit" href={map}>
                                    Aceptar
                                </Button>
                                </Grid>
                                <Grid item md={2}></Grid>
                                <Grid item md={5}>
                                    <Button type="submit" fullWidth variant="contained" className="black" href={cupos}>
                                        Cancelar
                                    </Button>
                                </Grid>
                            </Grid>
                            </Grid>
                            <Grid item sm={false} md={2}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };
}
