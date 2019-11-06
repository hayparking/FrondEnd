import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 50,
    },
});

function createData(name, address) {
    return { name, address };
}
const rows = [
    createData('Parque Simón Bolivar', "Cra. 59 #56-15"),
    createData('Aparcar Ltda', "Cl. 93 #14-29"),
    createData('Clínica Marly', "Cl. 50 #9B-54")
];

export default function ListFrec() {
    const classes = useStyles();

    return (
    <React.Fragment>
      <Typography variant="h5">Parqueaderos Frecuentes</Typography>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Parqueadero</TableCell>
                    <TableCell align="right">Dirección</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </React.Fragment>
  );
}