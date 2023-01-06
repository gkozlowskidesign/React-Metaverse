import NavBar from "./componets/Navigation";
import Hero from "./componets/Hero";
import Home from "./componets/Home";
import Learning from "./componets/Learning";
import Foundation from "./componets/Foundation";
import Documentation from "./componets/Documentation";
import Connect  from "./componets/Dashboard";
import Footer from "./componets/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
          <NavBar />
          <Hero/>
          <Home/>
          <Footer/>
          </Route>
          <Route exact path="/foundation">
          <NavBar />      
          <Hero/>
          <Foundation/>
          <Footer/>
          </Route>
          <Route  path="/learning">
          <NavBar />
          <Hero/>
          <Learning/>
          <Footer/> 
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

