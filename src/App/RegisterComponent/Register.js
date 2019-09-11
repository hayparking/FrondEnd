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
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <FaceRoundedIcon />
                        </Avatar>
                        <Typography variant="headline">Register</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Name</InputLabel>
                                <Input id="email" name="email" autoComplete="name" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Last Name</InputLabel>
                                <Input id="email" name="email" autoComplete="lastname" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>

                            <Button type="submit" fullWidth variant="raised" color="primary" className="submit">
                                Sign Up
                            </Button>
                        </form>
                        <Grid container>                            
                            <Grid item>
                              <Link variant="body2" component={Link} to="/">
                                {"Sign in"}
                              </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}