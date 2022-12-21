import NavBar from "./componets/Navigation";
import Hero from "./componets/Hero";
import Home from "./componets/Home";
import Learning from "./componets/Learning";
import Foundation from "./componets/Foundation";
import Documentation from "./componets/Documentation";
import Connect  from "./componets/Dashboard";
import Governance from "./componets/Governance";
import Discussion from "./componets/Discussion";
import Footer from "./componets/Footer";
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
          <Home/>
          <Footer/>
          </Route>
          <Route exact path="/foundation">
          <Hero/>
          <Foundation/>
          <Footer/>
          </Route>
          <Route  path="/dashboard">
          <Connect/>
          <Footer/>
          </Route>
          <Route exact path="/goverance">
          <Governance/>
          <Footer/>
          </Route>
          <Route exact path="/discussion">
          <Discussion/>
          <Footer/>
          </Route>
          <Route  path="/learning">
          <Hero/>
          <Learning/>
          <Footer/> 
          </Route>
          <Route  path="/documentation">
          <Hero/>
          <Documentation/>
          <Footer/>
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

