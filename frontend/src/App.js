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
import IndividualQuestion from "./components/Pages/QuestionIndividual/IndividualQuestion";
import Profile from "./components/Pages/Profile/Profile";
import Copyright from "./components/General/Copyright/Copyright";
import Login from "./components/General/Login/Login";
import Signup from "./components/General/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Classroom from "./components/Pages/Classroom/Classroom";
import Chatroom from "./components/Pages/Chatroom/Chatroom";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Switch>
          {/* General */}
          {/* <Route exact path="/" component={Landing} /> */}
          {/* <Route path="/explore" component={Explore} /> */}
          {/* Institute */}
          {/* <Route path="/institute/:id" component={Institute} /> */}
          {/* Courses */}
          {/* <Route path="/institute/:id/course/:id" component={Course} /> */}
          {/* Classroom */}
          {/* <Route path="/institute/:id/course/:id/class/:id" component={Classroom} /> */}
          {/* Question */}
          {/* <Route path="/question" component={QuestionFlow} />
          <Route path="/question/:id" component={IndividualQuestion} />
          <Route path="/askquestion" component={CreateQuestion} /> */}
          {/* <Route path="/postquestion" component={PostQuestion} /> */}
          {/* User */}
          {/* <Route path="/account/:name" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Signup} /> */}
          {/* ------------------------------------------------------------------------------------------------------ */}
          <Route exact path="/" component={Landing} />
          <Route path="/explore" component={Explore} />
          Institute
          <Route path="/xccelerate" component={Institute} />
          <Route path="/brainstation" component={Institute} />
          <Route path="/flatiron" component={Institute} />
          Xccelerate Courses
          <Route path="/xccelerate-datascience" component={Course} />
          <Route path="/xccelerate-webdevelopment" component={Course} />
          <Route path="/xccelerate-uxdesign" component={Course} />
          BrainStation Courses
          <Route path="/brainstation-data-science" component={Course} />
          <Route path="/brainstation-digital-leadership" component={Course} />
          <Route path="/brainstation-digital-marketing" component={Course} />
          <Route path="/brainstation-product-management" component={Course} />
          <Route
            path="/brainstation-use-experience-design"
            component={Course}
          />
          <Route path="/brainstation-web-development" component={Course} />
          Flatiron Courses
          <Route path="/flatiron-cybersecurity-analytics" component={Course} />
          <Route path="/flatiron-datascience" component={Course} />
          <Route
            path="/flatiron-cybersecurity-engineering"
            component={Course}
          />
          <Route path="/flatiron-software-engineering" component={Course} />
          Other
          <Route path="/question" component={QuestionFlow} />
          <Route path="/individualquestion" component={IndividualQuestion} />
          <Route path="/askquestion" component={CreateQuestion} />
          <Route path="/postquestion" component={PostQuestion} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Signup} />
          <Route path="/myclass" component={Classroom} />
          <Route path="/chatroom" component={Chatroom} />
        </Switch>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
