import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile, Companies, Error404} from "./index.js";

function App() {
  return (
    <div className="App" id="root">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;