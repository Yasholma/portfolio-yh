import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./../components/header/header.component";
import Hero from "../components/hero/hero.component";
import About from "./../components/about/about.component";
import Skill from "./../components/skill/skill.component";
import ProjectOverview from "./../components/project-overview/project-overview.component";
import Contact from "../components/contact/contact.component";
import Blog from "../components/blog/blog.component";

import "./App.styles.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skill} />
        <Route exact path="/project" component={ProjectOverview} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
