import React, { useState } from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    logout: {
      borderRadius: "50px",
      marginRight: "20px",
      marginLeft: "50px",
      background: "#e74c3c",
      fontSize: "1.3rem"
    },
    linkItems: {
      color: "white",
      fontSize: "1.2rem",
      "&:hover": {
        color: "#79bac1"
      }
    }
  };
});
const PrivateNavbarTabs = (props) => {
  const { logout } = props;
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
          label="Accounts"
          component={Link}
          to="/accounts"
        />
        <Tab
          className={classes.linkItems}
          label="Posts"
          component={Link}
          to="/posts"
        />

        <Tab
          className={classes.linkItems}
          label="Create-Post"
          component={Link}
          to="/create-post"
        />
        <Tab
          className={classes.logout}
          button="true"
          label="Logout"
          onClick={() => logout()}></Tab>
      </Tabs>
    </React.Fragment>
  );
};

export default PrivateNavbarTabs;
