import React from 'react';
import UserForm from  "./components/SIgnUpForm/userForm";
import UserMap from "./components/DashBoard/map";
import "./App.css"
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact render={(props) => <UserForm {...props} />} />
          <Route path="/dashboard" exact render={(props) => <UserMap {...props} />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
