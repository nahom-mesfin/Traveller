import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, Box, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lng: 0 }; // Define coordinates

  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo" }} // Replace with your API key
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}} // Add map options if necessary
        onChange={() => {}} // Placeholder for onChange handler
        onChildClick={() => {}} // Placeholder for onChildClick handler
      >
        {/* Example Marker */}
        <LocationOnIcon
          lat={coordinates.lat}
          lng={coordinates.lng}
          color="primary"
          fontSize="large"
        />
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
