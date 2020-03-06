import React, { useEffect } from "react";
import { connect } from "react-redux";

import PrivateNavbarDashboard from "./PrivateNavbar/PrivateNavbarDashboard";
import PublicNavbarDashboard from "./PublicNavbar/PublicNavbarDashboard";
import {
  setCurrentUser,
  logout
} from "../../redux/actions/usersAuth/userAuthActions";

const NavbarDashboard = (props) => {
  const { setCurrentUser, currentUser, logout } = props;

  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);
  return (
    <div>
      {currentUser === null ? (
        <PublicNavbarDashboard />
      ) : (
        <PrivateNavbarDashboard logout={logout} />
      )}

      <div style={{ marginTop: "100px" }}></div>
    </div>
  );
};
const actions = {
  setCurrentUser,
  logout
};

const mapstateToprops = (state) => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapstateToprops, actions)(NavbarDashboard);
