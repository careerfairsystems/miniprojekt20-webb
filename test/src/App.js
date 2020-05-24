import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile, Company, Error404} from "./index.js";

function App() {
  return (
    <div className="App" id="root">
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Error404">
            <Error404 />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Company">
            <Company />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/">
            <Error404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;