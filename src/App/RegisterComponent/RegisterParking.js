import React from 'react';
import './Register.css';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input, Grid, Select, MenuItem, FormControlLabel } from '@material-ui/core';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import Switch from '@material-ui/core/Switch';

const home = '/';
const Register2 = '/parqueadero2';

export class RegisterParking extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			Id: "",
			Domain: ""
		};
		this.handleIdChange = this.handleIdChange.bind(this);
		this.handleDomaiChange = this.handleDomaiChange.bind(this);
	}

	handleIdChange(e) {
		this.setState({
			Id: e.target.value
		});
	}

	handleDomaiChange(e) {
		this.setState({
			Domain: e.target.value
		});
	}

    render(){
        return (
            <React.Fragment>
				<Grid container className="background">
					<Grid item sm={3}></Grid>
					<Grid item sm={6}>
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
										<InputLabel htmlFor="Tid">Tidentificcation</InputLabel>
										<Select value={this.state.Id} onChange={this.handleIdChange} inputProps={{ name: 'type', id: 'Tid'}}>
											<MenuItem value="CC">CC</MenuItem>
											<MenuItem value="TI">TI</MenuItem>
											<MenuItem value="Pasaporte">Pasaporte</MenuItem>
										</Select>
									</FormControl>
									<br />
									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="number">Numero de identificacion</InputLabel>
										<Input id="identificacion" name="number" autoComplete="identify" autoFocus />
									</FormControl>
									<br />
									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="registerM">Registro Mercantil</InputLabel>
										<Input id="mercantil" name="registerM" autoComplete="registerM" autoFocus />
									</FormControl>
									<br />
									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="RSocial">Razon social</InputLabel>
										<Input id="social" name="RSocial" autoComplete="RSocial" autoFocus />
									</FormControl>
									<br />
									<FormControlLabel
										label="Facturacion Electronica:"
										labelPlacement="start"
										control={
											<Switch value="checkedA" />
										}
									/>
									<br />
									<Grid container>
										<Grid item md={6}>
											<FormControl margin="normal" required fullWidth>
												<InputLabel htmlFor="mail">Direccion de correo</InputLabel>
												<Input id="mail" name="mail" autoComplete="mail" autoFocus />
											</FormControl>
										</Grid>
										<Grid item md={6}>
											<FormControl margin="normal" required fullWidth>
												<InputLabel htmlFor="domain">@mail.com</InputLabel>
												<Select value={this.state.Domain} onChange={this.handleDomaiChange} inputProps={{ name: 'domain', id: 'correo' }}>
													<MenuItem value={"@hotmail.com"}>@hotmail.com</MenuItem>
													<MenuItem value={"@gmail.com"}>@gmail.com</MenuItem>
													<MenuItem value={"@yahoo.com"}>@yahoo.co</MenuItem>
												</Select>
											</FormControl>
										</Grid>
									</Grid>
									<br />
									<br />
									<Grid container>
										<Grid item md={6} >
											<Button type="submit" fullWidth color="primary" className="submit" href={home}>
												Atras
                    						</Button>
										</Grid>
										<Grid item md={6} >
											<Button type="submit" fullWidth color="primary" className="submit" href={Register2}>
												Siguiente
											</Button>
										</Grid>
									</Grid>
									<br />
								</form>
							</Paper>
						</main>
					</Grid>
					<Grid item sm={3}></Grid>
				</Grid>
      		</React.Fragment>
        );
    }
}