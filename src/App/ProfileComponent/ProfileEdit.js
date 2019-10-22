import React from 'react';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import './Profile.css';

const profile = '/Profile';

export class ProfileEdit extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column" className="ListBackground">
                    <CssBaseline />
                    <Grid item lg={12}>
                        <div className="ListTitle">
                            Datos Personales
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        nombre:
                        <br/>
                        apellido:
                        <br/>
                        coreeo:
                        <br/>
                        contraseña:
                        <br/>
                        direccion:
                        <br/>
                        pais:
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Grid item md={6} >
    											<Button type="submit" fullWidth color="black" className="submit" href={profile}>
    												Atras
                          </Button>
    										</Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };
}
