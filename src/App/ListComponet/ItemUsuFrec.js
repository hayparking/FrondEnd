import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import './Item.css'

export class ItemUsuFrec extends React.Component {
  render() {
    return(
      <Card className="item">
        <CardContent>
          <Typography color="textSecondary" variant="h5" component="h2">
            {this.props.Nombre}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            NumReservas: <br/>{this.props.NumReservas}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Asignar puntos</Button>
        </CardActions>
      </Card>
    )
  }
}
