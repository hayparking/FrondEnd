import React from 'react';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import './Profile.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const profile = '/Profile';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function createData(date, start, end, time ) {
  return { date, start, end, time };
}

const rows = [
  createData('Centro Comercial Santafé', 159, 6.0, 24),
  createData('Centro Comercial Cedritos 151', 237, 9.0, 37),
  createData('Mazuren Centro Comercial', 262, 16.0, 24),
  createData('Centro Comercial Palatino', 305, 3.7, 67),
  createData('Centro Comercial Mediterráneo', 356, 16.0, 49),
];

export default function HistorialRutas() {
  const classes = useStyles();
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
                            <div className={classes.root}>
                              <Paper className={classes.paper}>
                                <Table className={classes.table} size="small" aria-label="a dense table">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Fecha </TableCell>
                                      <TableCell align="right">Punto de partida</TableCell>
                                      <TableCell align="right">Punto de llegada&nbsp;</TableCell>
                                      <TableCell align="right">Tiempo de recorrido&nbsp;</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rows.map(row => (
                                      <TableRow key={row.date}>
                                        <TableCell component="th" scope="row">
                                          {row.date}
                                        </TableCell>
                                        <TableCell align="right">{row.start}</TableCell>
                                        <TableCell align="right">{row.end}</TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </Paper>
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
}
