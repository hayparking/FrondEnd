
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Button, InputLabel, FormControl, Input } from '@material-ui/core';

const map = '/mapa';
const profile = '/Profile';
const listaParqueaderos='/listasParquederos';

export class BuscarCupo extends React.Component {
    render(){
      return (
          <React.Fragment>
              <Grid container direction="column" className="ListBackground">
                  <CssBaseline />
                  <Grid item lg={12}>
                      <div className="ListTitle">
                      Encuentra un cupo
                      </div>
                  </Grid>
                  <Grid item lg={12}>
                  <form className="form">

                    <FormControl margin="normal" required fullWidth>
                      <InputLabel >Tipo de Transporte</InputLabel>
                      <Input id="transporte" name="transporte"/>
                    </FormControl>
                    <br />
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel >Placa</InputLabel>
                      <Input name="tiempo"  id="tiempo" />
                    </FormControl>
                    <br />
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel >Punto partida</InputLabel>
                      <Input name="tiempo"  id="tiempo" />
                    </FormControl>
                    <br />
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel >Punto Llegada</InputLabel>
                      <Input name="tiempo"  id="tiempo" />
                    </FormControl>
                    <br />
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel >Descripccion del medio de transporte</InputLabel>
                      <Input name="tiempo"  id="tiempo" />
                    </FormControl>
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
                    <Grid container>
                        <Grid item md={5}>
                        <Button type="submit" fullWidth variant="contained" color="black" className="submit" href={listaParqueaderos}>
                            Aceptar
                        </Button>
                        </Grid>
                        <Grid item md={2}></Grid>
                        <Grid item md={5}>
                            <Button type="submit" fullWidth variant="contained" className="black" href={profile}>
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                  </form>
                  </Grid>
              </Grid>
          </React.Fragment>
      );
  };
}
