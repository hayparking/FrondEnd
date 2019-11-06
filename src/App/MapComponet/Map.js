import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import './Map.css';
import {Link} from "react-router-dom";
import Link_material from "@material-ui/core/Link/Link";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 4.7827206,
      lng: -74.0447999
    },
    zoom: 16
  };
  render() {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAf6cZdx5lR7LdhWZEVgRAkoj9s3KuviDs' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
                lat={4.7827206}
                lng={-74.0447999}
                text="Mi ubicación"
            />
          </GoogleMapReact>
          <div>
            <Fab color="primary" aria-label="add" className={'fab'} component={Link} to="/profile">
              <CloseIcon />
            </Fab>
          </div>
        </div>
    );
  };

}
