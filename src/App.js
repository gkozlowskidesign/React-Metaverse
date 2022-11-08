import NavBar from "./componets/Navigation";
import Hero from "./componets/Hero";
import Guides from "./componets/Guides";
import Blog from "./componets/Blog";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route exact path="/">
            <Hero/>
          </Route>
          <Route  path="/guide">
          <Hero/>
          <Guides />
          </Route>
          <Route  path="/blog">
          <Hero />
          <Blog/>
        </Route>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
