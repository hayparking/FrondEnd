import React from 'react';
import './Register.css';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input } from '@material-ui/core';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';

export class Register extends React.Component{
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper" style={{margin: '0 auto', width:"20%"}}>
                        <Avatar className="avatar" style={{margin: '0 auto'}}>
                            <FaceRoundedIcon />
                        </Avatar>
                        <Typography variant="headline">Register</Typography>
                        <form className="form">
                            <FormControl margin="normal" required >
                                <InputLabel htmlFor="email">Name</InputLabel>
                                <Input id="email" name="email" autoComplete="name" autoFocus />
                            </FormControl>
                            <br/>
                            <FormControl margin="normal" required>
                                <InputLabel htmlFor="email">Last Name</InputLabel>
                                <Input id="email" name="email" autoComplete="lastname" autoFocus />
                            </FormControl>
                            <br/>                            
                            <FormControl margin="normal" required>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <br/>                            
                            <FormControl margin="normal" required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>
                            <br/>                            
                            <FormControl margin="normal" required>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>
                            <br/>                            
                            <Button type="submit" variant="raised" color="primary" className="submit">
                                Sign Up
                            </Button>
                        </form>
                        <br/>

                        <Grid container align="center">                            
                            <Grid item xs>
                              <Link variant="body2" component={Link} to="/">
                                {"Sign in"}
                              </Link>
                            </Grid>
                            <Grid item xs>
                              <Link variant="body2" component={Link} to="/parqueadero">
                                {"Regyster Parking"}
                              </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}