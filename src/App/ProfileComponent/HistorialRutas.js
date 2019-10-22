import React from 'react';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import './Profile.css';

const profile = '/Profile';
export class HistorialRutas extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column" className="ListBackground">
                    <CssBaseline />
                    <Grid item lg={12}>
                        <div className="ListTitle">
                          Historial De Rutas
                        </div>
                    </Grid>
                    <Grid item lg={12}>
                        <Grid container>
                            <Grid item sm={false} md={2}></Grid>
                            <Grid item sm={12} md={8}>
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
                            Fecha:
                            <br/>
                            inicio ruta:
                            <br/>
                            fin ruta:
                            <br/>
                            tiempo:
                            <br />
                            <br />
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
                                <Grid container>
                                    <Grid item md={5}>
                                        <Button type="submit" fullWidth variant="contained" className="submit" href={profile}>
                                            Atras
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
