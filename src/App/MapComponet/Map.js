import React  from 'react';
import { Grid, Button } from '@material-ui/core';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MomentUtils from '@date-io/moment';
import moment from "moment";
//import * as startOfDay from "date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './Map.css';

const mapInite = {
  lat: -1.2884,
  lng: 36.8233
}

const ListMap = '/listasParquederos';
const profile = '/Profile';

//const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
//const handleDateChange = date => {
//    this.setSelectedDate(date);
//  };

export class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = { dueDate: moment(), selectedDate: Date('2014-08-18T21:11:54')};
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleHourChange = this.handleHourChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      dueDate: date
    });
  }

  handleHourChange(date) {
    this.setState({
      selectedDate: date
    });
  }


  render() {
    return(
      <Grid container direction="column" className="MapBackground">
        <Grid item lg={12}>
          <div className="MapTitle">
            Map
          </div>
        </Grid>
        <Grid item lg={12}>
          <Grid container
            alignItems="center"
            justify="center"
          >
            <Grid item md={2}></Grid>
            <Grid item md={8} className="MapFrom">
              <form noValidate autoComplete="off">
                <br />
                <br />
                <Grid container>
                  <Grid item md={2}></Grid>
                  <Grid item md={4}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <KeyboardDatePicker
                        variant="inline"
                        format="DD/MM/YYYY"
                        margin="normal"
                        id="date-picker-inline"
                        label="Fecha reserva"
                        value={this.state.dueDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={4}
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  >
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Hora Estimada"
                        value={this.state.selectedDate}
                        onChange={this.handleHourChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={2}></Grid>
                </Grid>
                <br />
                <br />
                <Grid container
                  alignItems="center"
                  justify="center"
                >
                  <Grid item md={2}></Grid>
                  {/*
                  <Grid item md={3}>
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit" href={}>
                      Lista Parqueaderos
                    </Button>
                  </Grid>
                  */}
                  <br />
                  <Grid item md={2}></Grid>
                  <Grid item md={3}>
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit" href={ListMap}>
                      Reserva
                    </Button>
                  </Grid>
                  <Grid item md={2}></Grid>

                  <Grid item md={3}>
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit" href={profile}>
                      Finalizar viaje
                    </Button>
                  </Grid>

                </Grid>
                <br />
                <br />
              </form>
            </Grid>
            <Grid item md={2}></Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Grid container>
            <Grid item md={2}></Grid>
            <Grid item md={8}>
              <LoadScript googleMapsApiKey="AIzaSyCkmakEp0uLRoiF2-tJKv8UtxB8yZ4ter0" region="CO">
                <GoogleMap mapContainerClassName="GoogleMaps" center={mapInite} />
              </LoadScript>
            </Grid>
            <Grid item md={2}></Grid>
          </Grid>
        </Grid>
        <br />
        <br />
      </Grid>
    )
  };

}
