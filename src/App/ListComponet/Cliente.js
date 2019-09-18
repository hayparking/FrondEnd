import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import './Item.css'

export class Item extends React.Component {
  render() {
    return(
      <Card className="item">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {this.props.Nombre}
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.NumReservas}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
