import React from "react";
import SideBar from "./Components/SideBar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';

import "./index.css"
function App() {
  return (
    <Router>
      <div className='app-main-container'>
        <SideBar />
        <Switch>
          <div className='app-content'>
            {/* <Route exact path='/' component={} /> */}
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/experience' component={Experience} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

