import NavBar from "./componets/Navigation";
import Hero from "./componets/Hero";
import Guides from "./componets/Guides";
import Blog from "./componets/Blog";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/" element={Home/}>
            <Hero/>
          </Route>
          <Route  path="/guide"  element={<Guide/>}>
          <Hero/>
          <Guides />
          </Route>
          <Route  path="/blog" element={<Blog/>}>
          <Hero />
          <Blog/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
