import NavBar from "./componets/Navigation";
import Home from "./componets/Home";
import Foundation from "./componets/Foundation";
import Learning from "./componets/Learning";
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
          <Route  path="/foundation">
          <Foundation />
          </Route>
          <Route  path="/learning">
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
