import React from "react";
// import { Autocomplete } from "@react-google-maps/api"; // Uncomment this if using
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import useStyles from "./styles"; // Ensure your styles.js is correct

const Header = () => {
  const classes = useStyles(); // Get the styles

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Traveller
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

          {/* <Autocomplete> */}
          <div className={classes.search}>
            {" "}
            {/* Fix className usage */}
            <div className={classes.searchIcon}>
              {" "}
              {/* Fix className usage */}
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search ... "
              classes={{ root: classes.inputRoot, input: classes.inputInput }} // Fix styles
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
