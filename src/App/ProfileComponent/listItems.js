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

//import { Link } from "react-router-dom";
//<ListItem button component={Link} to="/design">

const map = '/mapa';
const singIn = '/';
const parking = '/parqueadero';
const edit='/ProfileEdit'

export const mainListItems = (
  <div>
    <ListItem button component="a" href="ProfileEdit">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Editar Perfil" />
    </ListItem>

    <ListItem button component="a" href="HistorialRutas">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Rutas Frecuentes" />
    </ListItem>

    <ListItem button component="a" href="Promociones">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Promociones" />
    </ListItem>

    <ListItem button component="a" href="BuscarCupo">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Encuentra tu cupo" />
    </ListItem>

    <ListItem button component="a" href="mapa">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Mapa " />
      </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Soporte" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Buzón" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
//https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard
