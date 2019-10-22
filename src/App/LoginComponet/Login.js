import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Input, Link } from '@material-ui/core';
import './Login.css';
import Parking_logo from '../../Images/parking_logo.jpg';

const register = '/register';
const parking = '/listasParquederos';
const map = '/mapa';
const menuadmin = '/usuariosFrec';
const profile='/profile';


export class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container className="background">
          <Grid item xs={false} sm={4} md={7}/>
          <Grid item xs={12} sm={12} md={5} elevation={6}>
              <CssBaseline />
              <main className="layout">
                <Paper className="paper">
                  <img src={Parking_logo} alt="ParkingLogo"/>
                  <Avatar className="avatar">
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography variant="headline">Sign in</Typography>
                  <form className="form">
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Email Address</InputLabel>
                      <Input id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <br />
                    <br />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit" href={profile}>
                        Sign In
                    </Button>

                    <Grid container spacing={4}>
                      <Grid item xs={12}></Grid>
                      <Grid item xs={6}>
                        <Link href="#" variant="link1">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item xs={6}>
                        <Link href={menuadmin} variant="link2">
                          Ingresar como admin
                        </Link>
                      </Grid>
                    </Grid>
                    <Grid container spacing={4}>

                    <Grid item xs={6}>
                      <Link href={parking} variant="link3">
                        See Parking
                      </Link>
                    </Grid>
                    <Grid item xs={6}>
                      <Link href={register} variant="link4">
                        Don't have an account? Sign Up
                      </Link>
                    </Grid>

                    <Grid item xs={6}>
                      <Link href={profile} variant="link4">
                        PERFIL
                      </Link>
                    </Grid>
                    </Grid>

                  </form>
                </Paper>
              </main>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Hay Parking
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
*/
