import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import PublicNavbarTabs from "./PublicNavbarTabs";
import { Link } from "react-router-dom";
import PublicSidebarDrawer from "./PublicSidebarDrawer";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      color: "#e7b2a5",
      fontSize: "1.2rem",
      listStyle: "none",
      padding: "10px",
      "&:hover": {
        color: "#79bac1"
      }
    }
  };
});

const PublicNavbarDashboard = () => {
  const classes = useStyles();
  return (
    <div style={{ marginBottom: "90px" }}>
      <AppBar color="primary">
        <Toolbar>
          {/* Logo */}
          <Button>
            <Link to="/" className={classes.logo}>
              GGF
            </Link>
          </Button>
          <PublicNavbarTabs />
          <PublicSidebarDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PublicNavbarDashboard;
