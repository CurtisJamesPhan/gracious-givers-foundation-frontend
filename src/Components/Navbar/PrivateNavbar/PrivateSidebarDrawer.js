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
    }
  };
});

const PrivateSidebarDrawer = (props) => {
  const { logout } = props;
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
            button
            onClick={closedDrawerChange}
            divider
            component={Link}
            to="/">
            Home
          </ListItem>
          {/*   Projects */}
          <ListItem
            button
            onClick={closedDrawerChange}
            divider
            component={Link}
            to="/projects">
            Projects
          </ListItem>
          {/* Create Project */}
          <ListItem
            button
            onClick={closedDrawerChange}
            divider
            component={Link}
            to="/create-project">
            Create Project
          </ListItem>

          {/* Create Project */}
          <ListItem onClick={logout} divider>
            Logout
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

export default PrivateSidebarDrawer;
