import React from 'react';
import { Cliente } from './Cliente';
import { ItemUsuFrec } from './ItemUsuFrec';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import './List.css';

const home = '/';
const Register = '/parqueadero';

export class UsuFrec extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column" className="ListBackground">
                    <CssBaseline />
                    <Grid item lg={12}>
                        <div className="ListTitle">
                            Lista de Usuarios Frecuentes
                        </div>
                    </Grid>
                    <Grid item lg={12}>
                        <Grid container>
                            <Grid item sm={false} md={2}></Grid>
                            <Grid item sm={12} md={8}>

                                <ItemUsuFrec Nombre="Juan" NumReservas=" 7" />
                                <ItemUsuFrec Nombre="Juanito" NumReservas=" 7" />
                                <ItemUsuFrec Nombre="Juanita" NumReservas=" 7" />
                                <ItemUsuFrec Nombre="Julian" NumReservas=" 9" />
                                <ItemUsuFrec Nombre="Felipe" NumReservas=" 4" />
                                <ItemUsuFrec Nombre="Nicolas" NumReservas=" 7" />
                                <ItemUsuFrec Nombre="Diego" NumReservas=" 3" />
                                <ItemUsuFrec Nombre="Estevan" NumReservas=" 2" />
                                <ItemUsuFrec Nombre="Mateo" NumReservas=" 1" />
                                <ItemUsuFrec Nombre="ALejandra" NumReservas=" 17" />

                                <br />
                                <br />
                                <Grid container>
                                    <Grid item md={5}>
                                        <Button type="submit" fullWidth variant="contained" className="submit" href={home}>
                                            Atras
                                        </Button>
                                    </Grid>
                                    <Grid item md={2}></Grid>
                                    <Grid item md={5}>
                                        <Button type="submit" fullWidth variant="contained" className="submit" href={Register}>
                                            Registro Parqueadero
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
