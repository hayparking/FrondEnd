import React from 'react';
import { Item } from './Item';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import './List.css';

const home = '/';
const Register = '/parqueadero';
const buscarCupo = '/BuscarCupo';
const map = '/mapa';

export class List extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column" className="">
                    <CssBaseline />
                    <Grid item lg={8}>
                        <h1>
                            Elije tu parqueadero
                        </h1>
                    </Grid>
                    <Grid item lg={12}>
                        <Grid container style={{alignContent: "center"}}>
                            <Grid item sm={12} md={5}>
                                <Item Nombre="Parqueadero - Parque Simón Bolivar " Direccion="Cra. 59 #56-15 " Cupos=" 7" />
                                <Item Nombre="PARQUEADERO PÚBLICO " Direccion="Cl. 93 #14-29 " Cupos=" 7" />
                                <Item Nombre="Parqueadero Público Aparcar Ltda" Direccion="11, Cra. 13 #50 A " Cupos=" 7" />
                                <Item Nombre="Parqueadero" Direccion="Cra. 13 #40A-17 " Cupos=" 9" />
                                <Item Nombre="Parqueadero Privado de la Clínica Marly" Direccion="16, Cl. 50 #9 " Cupos=" 4" />
                                <Item Nombre="Parqueadero" Direccion="Cl. 53 #1060 " Cupos=" 7" />
                                <Item Nombre="parking" Direccion="Cl. 63 " Cupos=" 3" />
                                <Item Nombre="Parqueadero Publico Eli García" Direccion="10, esquina con Carrera 8, Cl. 49 #7 " Cupos=" 2" />
                                <Item Nombre="Parqueadero publico" Direccion="a 49-99, Cra. 13 #491 " Cupos=" 1" />
                                <Item Nombre="Parqueadero La 51" Direccion="79, Cra. 13 #51 " Cupos=" 7" />
                                <Item Nombre="Parqueadero Exito Cafam Cl 51" Direccion="Cl. 51 #1560 " Cupos=" 0" />
                                <Item Nombre="parqueadero público" Direccion="85, Cra. 16 #39 A " Cupos=" 3" />
                                <Item Nombre="Parqueadero Cl48" Direccion="Cl. 48 #976 " Cupos=" 2" />
                                <Item Nombre="Parking" Direccion="11, Cra. 52 #24" Cupos=" 1" />
                                <Item Nombre="Parqueadero 24 Horas Cl55" Direccion="Cra. 13 #21 " Cupos=" 8" />
                                <Item Nombre="Parqueadero Autolemus" Direccion="Cl. 64 #11-31 " Cupos=" 9" />
                                <Item Nombre="Parqueadero Público Parking" Direccion="51, Cl. 52 #7 " Cupos=" 1" />
                                <Item Nombre="Parqueadero Público Park Elite S.A" Direccion="53, Cra. 7 #52 " Cupos=" 8" />
                                <Item Nombre="Parqueadero J.S.L." Direccion="Cra. 7 #41-45 " Cupos=" 9" />
                                <Item Nombre="     " Direccion="calle " Cupos=" 1" />
                                <Item Nombre="     " Direccion="calle " Cupos=" 8" />
                                <br />
                                <br />
                                <Grid container>
                                    <Grid item md={5}>
                                        <Button type="submit" fullWidth variant="contained" className="submit" href={buscarCupo}>
                                            Atras
                                        </Button>
                                    </Grid>
                                    <Grid item md={2}></Grid>
                                    <Grid item md={5}>
                                        <Button type="submit" fullWidth variant="contained" className="submit" href={map}>
                                            Aceptar
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
