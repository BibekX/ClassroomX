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
import Profile from "./components/Pages/Profile/Profile";
import Copyright from "./components/General/Copyright/Copyright";
import Login from "./components/General/Login/Login";
import Signup from "./components/General/Signup/Signup";
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
          {/* Institute */}
          <Route path="/xccelerate" component={Institute} />
          <Route path="/brainstation" component={Institute} />
          <Route path="/flatiron" component={Institute} />
          {/* Xccelerate Courses */}
          <Route path="/datascience" component={Course} />
          <Route path="/webdevelopment" component={Course} />
          <Route path="/uxdesign" component={Course} />
          {/* BrainStation Courses */}
          <Route path="/brainstation/datascience" component={Course} />
          <Route path="/brainstation/webdevelopment" component={Course} />
          <Route path="/brainstation/uxdesign" component={Course} />
          {/* Flatiron Courses */}
          <Route path="/flatiron/datascience" component={Course} />
          <Route path="/flatiron/webdevelopment" component={Course} />
          <Route path="/flatiron/uxdesign" component={Course} />
          {/* Other */}
          <Route path="/questionflow" component={QuestionFlow} />
          <Route path="/askquestion" component={CreateQuestion} />
          <Route path="/postquestion" component={PostQuestion} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
