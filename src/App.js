import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile, Companies, Error404 } from "./index.js";
import MenuList from './components/MenuList';

function App() {
  return (
    <BrowserRouter>
      <MenuList />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/error-404">
            <Error404 />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/companies">
            <Companies />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/">
            <Error404 />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
