import React from 'react';
import './Register.css';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input, Grid, Select, MenuItem, FormControlLabel } from '@material-ui/core';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import Switch from '@material-ui/core/Switch';

const home = '/parqueadero2';
const Register3 = '/parqueadero3';

export class RegisterDirection extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			//Id: "",
			//Domain: ""
			//Modificado para vista 3
				//como solo se tiene una letra en cada form , no se afectan, pero se necesita una para cada una para guardar
				//valores ?

			Avenida: "",
			Letra1: "",
			Bis: "",
			Letra2: "",
			Orientacion: "",
			Letra3: "",
			orientacion2:""
		};
		/*this.handleIdChange = this.handleIdChange.bind(this);
		this.handleDomaiChange = this.handleDomaiChange.bind(this);*/
		this.handleAvenidaChange =this.handleAvenidaChange.bind(this);
		this.handleLetra1Change = this.handleLetra1Change.bind(this);
		this.handleBisChange = this.handleBisChange.bind(this);
		this.handleLetra2Change = this.handleLetra2Change.bind(this);
		this.handleOrientacionChange = this.handleOrientacionChange.bind(this);
		this.handleLetra3Change = this.handleLetra3Change.bind(this);
		this.handleOrientacion2Change = this.handleOrientacion2Change.bind(this);
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
//modificados para vista 3
	handleAvenidaChange(e) {
		this.setState({
			Avenida: e.target.value
		});
	}

	handleLetra1Change(e) {
		this.setState({
			Letra1: e.target.value
		});
	}

	handleBisChange(e) {
		this.setState({
			Bis: e.target.value
		});
	}

	handleLetra2Change(e) {
		this.setState({
			Letra2: e.target.value
		});
	}
	handleOrientacionChange(e) {
		this.setState({
			Orientacion: e.target.value
		});
	}

	handleLetra3Change(e) {
		this.setState({
			Letra3: e.target.value
		});
	}

	handleOrientacion2Change(e) {
		this.setState({
			Orientacion2: e.target.value
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
										<InputLabel htmlFor="Tav">Avenida/Calle/Carrera/Transversal</InputLabel>
										<Select value={this.state.Avenida} onChange={this.handleAvenidaChange} inputProps={{ name: 'type', id: 'Tav'}}>
											<MenuItem value="80">80</MenuItem>
											<MenuItem value="Boyaca">Boyaca</MenuItem>
											<MenuItem value="AutoNorte">AutoNorte</MenuItem>
										</Select>
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="Tid">Avenida/Calle/Carrera/Transversal</InputLabel>
										<Select value={this.state.Avenida} onChange={this.handleAvenidaChange} inputProps={{ name: 'type', id: 'Tid'}}>
											<MenuItem value="80">80</MenuItem>
											<MenuItem value="Boyaca">Boyaca</MenuItem>
											<MenuItem value="AutoNorte">AutoNorte</MenuItem>
										</Select>
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