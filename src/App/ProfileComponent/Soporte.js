import React from 'react';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import './Profile.css';
import {InputLabel, FormControl, Input } from '@material-ui/core';

const profile = '/Profile';
export class Soporte extends React.Component {
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
                      <form className="form">
                        <FormControl margin="normal" required fullWidth>
                          Correo:<Input name="correo"  id="correo" type="email"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                          Mensaje:<Input id="mensaje" name="mensaje"/>
                        </FormControl>
                        <br />
                      </form>
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
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <Grid container>
                          <Grid item md={5}>
                          <Button type="submit" fullWidth variant="black" color="black" className="submit" href={profile}>
                              Aceptar
                          </Button>
                          </Grid>
                          <Grid item md={2}></Grid>
                          <Grid item md={5}>
                              <Button type="submit" fullWidth variant="black" className="black" href={profile}>
                                  Atras
                              </Button>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </React.Fragment>
        );
    };
}
