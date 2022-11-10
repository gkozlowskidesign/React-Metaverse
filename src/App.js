import NavBar from "./componets/Navigation";
import Hero from "./componets/Hero";
import Guides from "./componets/Guides";
import Projects from "./componets/Learning-Projects";
import Concepts from "./componets/Learning-Concepts";
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
          <Hero/>
          </Route>
          <Route  path="/guide">
          <Guides />
          </Route>
          <Route  path="/projects">
          <Learning/> 
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
