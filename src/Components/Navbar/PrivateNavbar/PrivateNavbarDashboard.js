import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";
import PrivateNavbarTabs from "./PrivateNavbarTabs";
import PrivateSidebarDrawer from "./PrivateSidebarDrawer";
import { withRouter } from "react-router-dom";
import { setCurrentUser } from "../../../redux/actions/usersAuth/userAuthActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      color: "#e7b2a5",
      fontSize: "1.3rem",
      border: "1px solid #e7b2a5",
      padding: "10px",
      "&:hover": {
        color: "#79bac1"
      }
    }
  };
});

const PrivateNavbarDashboard = (props) => {
  const { logout, setCurrentUser } = props;
  const classes = useStyles();

  const logUserOut = () => {
    logout();
    setCurrentUser();
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          {/* Logo */}
          <Button>
            <Typography className={classes.logo}>GGF</Typography>
          </Button>

          <PrivateNavbarTabs logout={logUserOut} />
          <PrivateSidebarDrawer logout={logUserOut} />
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: "60px" }}></div>
    </React.Fragment>
  );
};

const actions = {
  setCurrentUser
};

export default withRouter(connect(null, actions)(PrivateNavbarDashboard));
