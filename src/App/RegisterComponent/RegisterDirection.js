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
			Orientacion2:""
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
								<Typography variant="headline">Registro direccion</Typography>
								<Avatar className="avatar">
									<FaceRoundedIcon />
								</Avatar>
								<Typography variant="headline"></Typography>
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
										<InputLabel htmlFor="Numero1">Numero</InputLabel>
										<Input id="Numero1" name="Numero1" autoComplete="Numero1" autoFocus />
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="Letra1Id">Letra</InputLabel>
										<Select value={this.state.Letra1} onChange={this.handleLetra1Change} inputProps={{ name: 'type', id: 'Letra1Id'}}>
											<MenuItem value="a">a</MenuItem>
											<MenuItem value="b">b</MenuItem>
											<MenuItem value="c">c</MenuItem>
										</Select>
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="bisId">Bis</InputLabel>
										<Select value={this.state.Bis} onChange={this.handleBis1Change} inputProps={{ name: 'type', id: 'bisId'}}>
											<MenuItem value="None"></MenuItem>
											<MenuItem value="Bis">Bis</MenuItem>

										</Select>
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="Letra2Id">Letra</InputLabel>
										<Select value={this.state.Letra2} onChange={this.handleLetra2Change} inputProps={{ name: 'type', id: 'Letra2Id'}}>
											<MenuItem value="a">a</MenuItem>
											<MenuItem value="b">b</MenuItem>
											<MenuItem value="c">c</MenuItem>
										</Select>
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="Orientacion1Id">Este/Oeste</InputLabel>
										<Select value={this.state.Orientacion} onChange={this.handleOrientacionChange} inputProps={{ name: 'type', id: 'Orientacion'}}>
											<MenuItem value="Norte">Norte</MenuItem>
											<MenuItem value="Sur">Sur</MenuItem>
											<MenuItem value="Este">Este</MenuItem>
											<MenuItem value="Oeste">Oeste</MenuItem>
										</Select>
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="Numero2">Numero</InputLabel>
										<Input id="Numero2" name="Numero2" autoComplete="Numero2" autoFocus />
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="Letra3Id">Letra</InputLabel>
										<Select value={this.state.Letra3} onChange={this.handleLetra3Change} inputProps={{ name: 'type', id: 'Letra3'}}>
											<MenuItem value="a">a</MenuItem>
											<MenuItem value="b">b</MenuItem>
											<MenuItem value="c">c</MenuItem>
										</Select>
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="Numero3">Numero</InputLabel>
										<Input id="Numero3" name="Numero3" autoComplete="Numero3" autoFocus />
									</FormControl>

									<br />

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="rientacion2Id">Este/Oeste</InputLabel>
										<Select value={this.state.Orientacion2} onChange={this.handlerientacion2Change} inputProps={{ name: 'type', id: 'rientacion2'}}>
											<MenuItem value="Norte">Norte</MenuItem>
											<MenuItem value="Sur">Sur</MenuItem>
											<MenuItem value="Este">Este</MenuItem>
											<MenuItem value="Oeste">Oeste</MenuItem>
										</Select>
									</FormControl>

									<FormControl margin="normal" required fullWidth>
										<InputLabel htmlFor="Observaciones">Observaciones</InputLabel>
										<Input id="Observaciones" name="Observaciones" autoComplete="Observaciones" autoFocus />
									</FormControl>
									<br />

									<Grid container>
										<Grid item md={6} >
											<Button type="submit" fullWidth color="primary" className="submit" href={home}>
												Atras
                    						</Button>
										</Grid>
										<Grid item md={6} >
											<Button type="submit" fullWidth color="primary" className="submit" O>
												Enviar
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