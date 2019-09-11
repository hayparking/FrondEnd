import React from 'react';
import './Register.css';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input } from '@material-ui/core';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import Switch from '@material-ui/core/Switch';

export class RegistroPar1 extends React.Component{
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
						<Typography variant="headline">Registro Parqueadero</Typography>
                        <Avatar className="avatar">
                            <FaceRoundedIcon />
                        </Avatar>
                        <Typography variant="headline">Informacion de Facturacion </Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
								<label>Tipo de identificacion</label>
								<select>
								  <option selected value="DEFAULT"></option>
								  <option value="CC">CC</option>
								  <option value="TI">TI</option>
								  <option value="pasaporte">Pasaporte</option>
								</select> 
                            </FormControl>
							
							<FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Numero de identificacion</InputLabel>
                                <Input id="identificacion" name="email" autoComplete="lastname" autoFocus />
                            </FormControl>
							
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Registro Mercantil</InputLabel>
                                <Input id="mercantil" name="email" autoComplete="lastname" autoFocus />
                            </FormControl>
							
							<FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Razon social</InputLabel>
                                <Input id="social" name="email" autoComplete="email" autoFocus />
                            </FormControl>
							
							<FormControl margin="normal" required fullWidth>
								<div >
									<label>Facturacion Electronica:</label>
									  <Switch/>
								</div>
                            </FormControl>
							
                            <FormControl margin="normal" required fullWidth>
								<div >
									<InputLabel htmlFor="email">Direccion de correo</InputLabel>
									<Input id="email" name="email" autoComplete="email" autoFocus />
									<select>
									  <option selected value="DEFAULT"></option>
									  <option value="hotmail">@hotmail.com</option>
									  <option value="gmail">@gmail.com</option>
									  <option value="yahoo">@yahoo</option>
									</select>
									
								</div>
					
							</FormControl>	
								
                            <Button type="submit" fullWidth variant="raised" color="primary" className="submit" href="parqueadero2">
                                Siguiente
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}