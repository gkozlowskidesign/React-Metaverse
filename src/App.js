import NavBar from "./componets/Navigation";
import Home from "./componets/Home";
import GetStarted from "./componets/GetStarted";
import Foundation from "./componets/Foundation";
import Projects from "./componets/Projects";
import Concepts from "./componets/Concepts";
import Documentation from "./componets/Documentation";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route  path="/getstarted">
          <GetStarted />
          </Route>
          <Route  path="/foundation">
          <Foundation />
          </Route>
          <Route  path="/projects">
          <Projects/> 
          </Route>
          <Route  path="/concepts">
          <Concepts/> 
          </Route>
          <Route  path="/documentation">
          <Documentation/>
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
