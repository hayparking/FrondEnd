import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Puntos() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Puntos</Title>
      <Typography component="p" variant="h4">
        100
      </Typography>
    </React.Fragment>
  );
}
