import NavBar from "./componets/Navigation";
import Home from "./componets/Home";
import Learning from "./componets/Learning";
import Foundation from "./componets/Foundation";
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
          <Home/>
          <Footer/>
          </Route>
          <Route exact path="/foundation">
          <NavBar />      
          <Foundation/>
          <Footer/>
          </Route>
          <Route  path="/learning">
          <NavBar />
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

