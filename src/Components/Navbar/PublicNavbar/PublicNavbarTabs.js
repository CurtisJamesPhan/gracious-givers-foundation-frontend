import React, { useState } from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    login: {
      borderRadius: "30px",
      marginRight: "20px",
      marginLeft: "50px",
      background: "#512b58",
      fontSize: "1.1rem"
    },
    linkItems: {
      color: "white",
      fontSize: "1.1rem",
      "&:hover": {
        color: "#79bac1"
      }
    }
  };
});

const PublicNavbarTabs = () => {
  const classes = useStyles();
  const [tabsValue, setTabsValue] = useState(0);

  //TAB HandleChange
  const tabHandleChange = (event, newValue) => {
    setTabsValue(newValue);
  };

  return (
    <React.Fragment>
      <Tabs value={tabsValue} onChange={tabHandleChange}>
        <Tab
          className={classes.linkItems}
          label="Home"
          component={Link}
          to="/"
        />
        <Tab
          className={classes.linkItems}
          label="Register"
          component={Link}
          to="/register"
        />
        <Tab
          className={classes.login}
          label="Login"
          component={Link}
          to="/login"
        />
      </Tabs>
    </React.Fragment>
  );
};

export default PublicNavbarTabs;
