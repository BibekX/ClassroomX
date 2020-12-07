import React from "react";
import Navbar from "./components/General/Navbar/Navbar";
import Landing from "./components/Pages/Landing/Landing";
import Explore from "./components/Pages/Explore/Explore";
import Institute from "./components/Pages/Institute/Institute";
import Course from "./components/Pages/Course/Course";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/explore" component={Explore} />
          <Route path="/institute" component={Institute} />
          <Route path="/course" component={Course} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
