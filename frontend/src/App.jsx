import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState,useEffect } from "react";

function App() {

  let data;

  const getdata = () => {
    data = localStorage.getItem('username');

    if (data) {
      return JSON.parse(localStorage.getItem('username'));
    }
    else return '';
  }

  const [name, setName] = useState(getdata());

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(name));
    
  },[name])

  return (
    <Router>
      <Topbar name={name} setName={setName} />
      <Switch>
        <Route exact path="/">
          {name.length ? <Homepage name={name} /> : <Register />}
        </Route>
        <Route path="/posts">
          <Homepage name={name} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login" >
          <Login setName={setName} />
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write"><Write /></Route>
        <Route path="/settings">
          {name.length ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
