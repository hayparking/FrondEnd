import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import './Item.css'

const Reservar = '';
export class Item extends React.Component {
  render() {
    return(
      <Card className="item">
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
          <Button size="small" color="primary" href={Reservar}>Reservar</Button>


        </CardActions>
      </Card>
    )
  }
}
