import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HolyGrail from './HolyGrail';
import PhotoAlbum from './PhotoAlbum';

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/holygrail">HolyGrail</Link>
      </li>
      <li>
        <Link to="/photoalbum">Photo Album</Link>
      </li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/holygrail" component={HolyGrail} />
          <Route exact path="/photoalbum" component={PhotoAlbum} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
