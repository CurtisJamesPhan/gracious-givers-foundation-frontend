import React, { useEffect } from "react";
import "./App.css";
import UserRegistration from "./Components/Users/UserRegistration";
import Login from "./Components/Users/Login";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import CreatePostForm from "./Components/Posts/CreatePostForm";
import { setCurrentUser } from "./redux/actions/usersAuth/userAuthActions";
import Theme from "./config/Theme";
import NavbarDashboard from "./Components/Navbar/NavbarDashboard";
import PostLists from "./Components/Posts/PostLists";

const App = (props) => {
  const { setCurrentUser } = props;

  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <NavbarDashboard />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={UserRegistration} />
            <Route exact path="/create-post" component={CreatePostForm} />
            <Route exact path="/posts" component={PostLists} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

const actions = {
  setCurrentUser
};

export default connect(null, actions)(App);
