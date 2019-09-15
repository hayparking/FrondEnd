import React from 'react';
import './Register.css';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input, Link } from '@material-ui/core';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';

const singIn = '/';
const parking = '/parqueadero';

export class Register extends React.Component {
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
                                <Typography variant="headline">Register</Typography>
                                <form className="form">
                                    <FormControl margin="normal" required fullWidth >
                                        <InputLabel htmlFor="email">Name</InputLabel>
                                        <Input id="email" name="email" autoComplete="name" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="email">Last Name</InputLabel>
                                        <Input id="email" name="email" autoComplete="lastname" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="email">Email Address</InputLabel>
                                        <Input id="email" name="email" autoComplete="email" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input name="password" type="password" id="password" autoComplete="current-password" />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                        <Input name="password" type="password" id="password" autoComplete="current-password" />
                                    </FormControl>
                                    <br />
                                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
                                        Sign Up
                                    </Button>
                                </form>
                                <br />

                                <Grid container align="center">
                                    <Grid item xs>
                                        <Link href={singIn} variant="link2">
                                            Sign in
                                        </Link>
                                    </Grid>
                                    <Grid item xs>
                                        <Link href={parking} variant="link2">
                                            Register Parking
                                        </Link>
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