import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from "react-router-dom";
import Link_material from "@material-ui/core/Link/Link";

//import { Link } from "react-router-dom";
//<ListItem button component={Link} to="/design">

const map = '/mapa';
const singIn = '/';
const parking = '/parqueadero';
const edit='/ProfileEdit'

export const mainListItems = (
  <div>
    <ListItem button component="a" component={Link} to="/ProfileEdit">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Editar Perfil" />
    </ListItem>

    <ListItem button component="a" component={Link} to="/HistorialRutas">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Historial de Rutas" />
    </ListItem>

    <ListItem button component="a" component={Link} to="/Promociones">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Promociones" />
    </ListItem>

    <ListItem button component="a" component={Link} to="/BuscarCupo">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Encuentra tu cupo" />
    </ListItem>

    <ListItem button component="a" component={Link} to="/mapa">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Mapa " />
      </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component="a" component={Link} to="/Soporte">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Soporte" />
    </ListItem>
    <ListItem button component="a" component={Link} to="/">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);
//https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard
