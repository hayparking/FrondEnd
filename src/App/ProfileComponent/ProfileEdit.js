import React from 'react';
import {Grid, CssBaseline, Button, Paper, Avatar, Typography} from '@material-ui/core';
import './Profile.css';
import {InputLabel, FormControl, Input } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import FaceRoundedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Link_material from "@material-ui/core/Link/Link";

const profile = '/Profile';


export class ProfileEdit extends React.Component {;
    render(){
        return (
            <React.Fragment>
                <Grid container className="background">
                    <Grid item xs={12} sm={12} md={6} elevation={6}>
                        <CssBaseline />
                        <main className="layout">
                            <Paper className="paper">
                                <Avatar className="avatar">
                                    <FaceRoundedIcon />
                                </Avatar>
                                <Typography variant="headline">Perfil</Typography>
                                <form className="form">
                                    <FormControl margin="normal" required fullWidth >
                                        <InputLabel htmlFor="email">Nombre</InputLabel>
                                        <Input id="email" name="email" autoComplete="name" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="email">Apellido</InputLabel>
                                        <Input id="email" name="email" autoComplete="lastname" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="email">Email</InputLabel>
                                        <Input id="email" name="email" autoComplete="email" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel>Dirección</InputLabel>
                                        <Input id="dirección" name="dirección" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="password">Contraseña</InputLabel>
                                        <Input name="password" type="password" id="password" autoComplete="current-password" />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="password">Confirmar Contraseña</InputLabel>
                                        <Input name="password" type="password" id="password" autoComplete="current-password" />
                                    </FormControl>
                                    <br />
                                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
                                        Actualizar
                                    </Button>
                                </form>
                                <br />

                                <Grid container align="center">
                                    <Grid item xs>
                                        <Link_material component={Link} to="profile/">
                                            Atrás
                                        </Link_material>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
