import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './Register.css';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input } from '@material-ui/core';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';	
import MenuItem from '@material-ui/core/MenuItem';

export class RegistroPar1 extends React.Component{

	

    render(){		
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper" style={{margin: '0 auto', width:"20%"}}>
												<Typography variant="headline">Registro Parqueadero</Typography>
		                    <Avatar className="avatar" style={{margin: '0 auto'}}>
		                        <FaceRoundedIcon />
		                    </Avatar>
		                    <Typography variant="headline">Informacion de Facturacion </Typography>
		                    <form className="form">
		                      	<FormControl margin="normal" required>
																<label>Tipo de identificacion</label>
																<Select>
																  <option selected value="DEFAULT"></option>
																  <option value="CC">CC</option>
																  <option value="TI">TI</option>
																  <option value="pasaporte">Pasaporte</option>
																</Select> 
		                        </FormControl>
														<br />
														<FormControl margin="normal" required>
		                            <InputLabel htmlFor="email">Numero de identificacion</InputLabel>
		                            <Input id="identificacion" name="email" autoComplete="lastname" autoFocus />
		                        </FormControl>
														<br />
		                        <FormControl margin="normal" required>
		                            <InputLabel htmlFor="email">Registro Mercantil</InputLabel>
		                            <Input id="mercantil" name="email" autoComplete="lastname" autoFocus />
		                        </FormControl>
														<br />
														<FormControl margin="normal" required>
		                            <InputLabel htmlFor="email">Razon social</InputLabel>
		                            <Input id="social" name="email" autoComplete="email" autoFocus />
		                        </FormControl>
														<br />
														<FormControl margin="normal" required>
																<div >
																		<label>Facturacion Electronica:</label>
																	  <Switch/>
																</div>
		                        </FormControl>
														<br />
		                        <FormControl margin="normal" required>
																<div >																		
																		<Input id="email" name="email" autoComplete="email" placeholder="email" autoFocus style={{width:'40%'}}/>
																		<Select style={{width:'40%'}}>
																			  <MenuItem value="DEFAULT"></MenuItem>
																			  <MenuItem value="hotmail">@hotmail.com</MenuItem>
																			  <MenuItem value="gmail">@gmail.com</MenuItem>
																			  <MenuItem value="yahoo">@yahoo</MenuItem>
																		</Select>															
																</div>												
														</FormControl>	
														<br />										
														<br />
														<Button color="primary" className="submit" href="parqueadero" component={Link} to="/">
															Volver
														</Button>										
		                        <Button type="submit" variant="raised" color="primary" className="submit" href="parqueadero2">
		                                Siguiente
		                        </Button>
                      	</form>
                		</Paper>
            		</main>
      		</React.Fragment>
        );
    }
}