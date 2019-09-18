import React from 'react';
import { Cliente } from './CLiente';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import './List.css';

const home = '/';
const Register = '/parqueadero';

export class List extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column" className="ListBackground">
                    <CssBaseline />
                    <Grid item lg={12}>
                        <div className="ListTitle">
                            Lista de Parqueaderos
                        </div>
                    </Grid>
                    <Grid item lg={12}>
                        <Grid container>
                            <Grid item sm={false} md={2}></Grid>
                            <Grid item sm={12} md={8}>

                                <Item Nombre="Juan" NumReservas=" 7" />
                                <Item Nombre="Juanito" NumReservas=" 7" />
                                <Item Nombre="Juanita" NumReservas=" 7" />
                                <Item Nombre="Julian" NumReservas=" 9" />
                                <Item Nombre="Felipe" NumReservas=" 4" />
                                <Item Nombre="Nicolas" NumReservas=" 7" />
                                <Item Nombre="Diego" NumReservas=" 3" />
                                <Item Nombre="Estevan" NumReservas=" 2" />
                                <Item Nombre="Mateo" NumReservas=" 1" />
                                <Item Nombre="ALejandra" NumReservas=" 17" />

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
