import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import './Item.css'
import {Link} from "react-router-dom";
import Exit from "@material-ui/core/SvgIcon/SvgIcon";

const Reservar = 'Reservar';

export class Item extends React.Component {
  render() {
    return(
      <Card className="item" style={{position: "relative", width: '90%', marginLeft: "auto", marginRight: "auto"}}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {this.props.Nombre}
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.Direccion}
          </Typography>
          <Typography variant="body2" component="p">
            Cupos: {this.props.Cupos}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary"  component={Link} to={Reservar} style={{marginRight: "auto", marginLeft: "auto"}}>
            Seleccionar
          </Button>
        </CardActions>
      </Card>
    )
  }
}
