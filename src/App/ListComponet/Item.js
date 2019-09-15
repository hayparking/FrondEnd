import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

export class Item extends React.Component {
  render() {
    return(
      <Card>
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
          <Button size="small" color="primary">Reservar</Button>
        </CardActions>
      </Card>    
    )
  }
}