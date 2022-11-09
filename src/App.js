import NavBar from "./componets/Navigation";
import Hero from "./componets/Hero";
import Guides from "./componets/Guides";
import Blog from "./componets/Blog";
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
          <Route  path="/blog">
          <Blog/> 
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
