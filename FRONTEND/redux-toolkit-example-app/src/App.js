import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddContact from "./Components/AddContact";
import Contact from "./Components/Contact";
import ContactList from "./Components/ContactList";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/contacts" className="navbar-brand"></a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/contacts"} className="nav-link">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/contacts"]} component={ContactList} />
            <Route exact path="/add" component={AddContact} />
            <Route path="/contacts/:id" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
