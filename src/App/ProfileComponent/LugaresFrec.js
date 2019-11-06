import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {CardContent} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


export default function LugaresFrec() {
    const classes = useStyles();

    return (
      <React.Fragment>
        <Typography color="textSecondary" gutterBottom>Reserva en curso</Typography>
        <Typography variant={"h5"}>
          Parqueadero - Parque Simón Bolivar
        </Typography>
        <Typography variant="h6" component="h2">
          Cra. 59 #56-15
        </Typography>
        <Typography style={{color: "#f9a825"}}>
          Tiempo restante: 14 min.
        </Typography>
      </React.Fragment>
    );
}
/* <Typography component="p" variant="h7">
          Centro Comercial Santafé<br/>
          Centro Comercial Cedritos 151<br/>
          Mazuren Centro Comercial<br/>
          Centro Comercial Palatino<br/>
          Centro Comercial Mediterráneo<br/>
          Centro Comercial Granada Hills<br/>
          Unicentro Bogotá<br/>
          Centro Comercial Cedritos 151<br/>
          Calima Centro Comercial Bogotá<br/>
          </Typography>*/