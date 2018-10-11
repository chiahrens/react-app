import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import recomposeImpl from "./recomposeImpl";
import simpleImpl from "./simpleImpl";

const App = () => (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/recompose">Recompose Implementation</Link>
        </li>
        <li>
          <Link to="/">Simple Implementation</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/recompose" component={recomposeImpl} />
      <Route exact path="/" component={simpleImpl} />
    </div>
  </Router>
);
export default App;
