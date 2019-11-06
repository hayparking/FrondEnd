import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


export default function Puntos() {
  return (
    <React.Fragment>
        <Typography component="p" variant="h3" style={{color: "green",  padding: "20% 0 0 0"}}>100</Typography>
        <Typography variant="h4" style={{color: "#4CA35C"}}>Puntos</Typography>
    </React.Fragment>
  );
}
