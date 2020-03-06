import React, { useState } from "react";
import { List, SwipeableDrawer, ListItem, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => {
  return {
    icon: {
      color: "white",
      marginLeft: "auto"
    },
    sidebar: {
      backgroundColor: theme.palette.common.green
    }
  };
});

const PublicSidebarDrawer = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const opendDrawerChange = () => {
    setOpenDrawer(true);
  };

  const closedDrawerChange = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={closedDrawerChange}
        onOpen={opendDrawerChange}>
        <List>
          {/* Home */}
          <ListItem
            bottom
            onClick={closedDrawerChange}
            divider
            component={Link}
            to="/">
            Home
          </ListItem>
          {/* Register */}
          <ListItem
            button
            onClick={closedDrawerChange}
            divider
            component={Link}
            to="/register">
            Register
          </ListItem>
          {/* Login */}
          <ListItem
            button
            onClick={closedDrawerChange}
            divider
            component={Link}
            to="/login">
            Login
          </ListItem>
        </List>
      </SwipeableDrawer>
      {/* This shouldn't be part of the sideDrawer instead we will push it to the end of the navbar by setting marginLeft: 'auto' */}

      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}>
        {/* We have to toggle the state from true to false and vice versa */}
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default PublicSidebarDrawer;
