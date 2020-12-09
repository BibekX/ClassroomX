import React from "react";
import ScrollToTop from "./components/General/ScrollToTop/ScrollToTop";
import Navbar from "./components/General/Navbar/Navbar";
import Landing from "./components/Pages/Landing/Landing";
import Explore from "./components/Pages/Explore/Explore";
import Institute from "./components/Pages/Institute/Institute";
import Course from "./components/Pages/Course/Course";
import QuestionFlow from "./components/Pages/QuestionFlow/QuestionFlow";
import CreateQuestion from "./components/Pages/QuestionCreate/CreateQuestion";
import PostQuestion from "./components/Pages/QuestionCreate/PostQuestion";
import Copyright from "./components/General/Copyright/Copyright";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/explore" component={Explore} />
          <Route path="/institute" component={Institute} />
          <Route path="/course" component={Course} />
          <Route path="/questionflow" component={QuestionFlow} />
          <Route path="/askquestion" component={CreateQuestion} />
          <Route path="/postquestion" component={PostQuestion} />
        </Switch>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
