import React from 'react';
import './Register.css';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input, Grid } from '@material-ui/core';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';

const Register = '/parqueadero';
const RegisterDirecction ='/direccion';

export class RegisterParking2 extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Grid container className="background">
                    <CssBaseline />
                    <Grid item sm={3}></Grid>
                    <Grid item sm={6}>
                        <main className="layout">
                            <Paper className="paper">
                                <Typography variant="headline">Registro Parqueadero</Typography>
                                <Avatar className="avatar">
                                    <FaceRoundedIcon />
                                </Avatar>
                                <Typography variant="headline">Informacion del Dueño</Typography>
                                <form className="form">
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="name">Nombres</InputLabel>
                                        <Input id="name" name="name" autoComplete="nombres" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="lastname">Apellidos</InputLabel>
                                        <Input id="lastname" name="lastname" autoComplete="apellidos" autoFocus />
                                    </FormControl>
                                    <br />

                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="streed">Barrio</InputLabel>
                                        <Input id="streed" name="streed" autoComplete="barrio" autoFocus />
                                    </FormControl>
                                    <br />

                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="city">Ciudad</InputLabel>
                                        <Input id="city" name="city" autoComplete="ciudad" autoFocus />
                                    </FormControl>
                                    <br />

                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="colony">Colonia</InputLabel>
                                        <Input id="colony" name="colony" autoComplete="colonia" autoFocus />
                                    </FormControl>
                                    <br />

                                    <Button type="submit" fullWidth color="primary" className="submit" href={Register}>
                                                Direccion
                    						</Button>

                                    {/* <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="address">Direccion</InputLabel>
                                        <Input id="address" name="address" autoComplete="direccion" autoFocus />
                                    </FormControl> */}
                                    <br />
                                    <br />
                                    <Grid container>
                                        <Grid item md={6} >
                                            <Button type="submit" fullWidth color="primary" className="submit" href={Register}>
                                                Atras
                    						</Button>
                                        </Grid>
                                        <Grid item md={6} >
                                            <Button type="submit" fullWidth color="primary" className="submit" href={RegisterDirecction}>
                                                Finalizar
											</Button>
                                        </Grid>
                                    </Grid>
                                    <br />
                                </form>
                            </Paper>
                        </main>
                    </Grid>
                    <Grid item sm={3}></Grid>
                </Grid>
            </React.Fragment>
        );
    }
}