
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Button, InputLabel, FormControl, Input } from '@material-ui/core';

const map = '/mapa';
export class Reservar extends React.Component {
    render(){
      return (
          <React.Fragment>
              <Grid container direction="column" className="ListBackground">
                  <CssBaseline />
                  <Grid item lg={12}>
                      <div className="ListTitle">
                      </div>
                  </Grid>
                  <Grid item lg={12}>
                  <form className="form">

                    <FormControl margin="normal" required fullWidth>
                      <InputLabel >Tipo de Transporte</InputLabel>
                      <Input id="transporte" name="transporte"/>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel >Tiempo Aroxdimado de uso</InputLabel>
                      <Input name="tiempo"  id="tiempo" />
                    </FormControl>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit" href={map}>
                        Aceptar
                    </Button>
                  </form>
                  </Grid>
              </Grid>
          </React.Fragment>
      );
  };
}
