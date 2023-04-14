import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = ()=> {
  
  const apikey = 'pub_197109592872956e257032cd2ecda33625f91'
  // const apikey = 'pub_197127f4355b81daa2f3e24dc98e63e2a3619'

  const[progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>
            <LoadingBar
            height = {2.5}
            color='#f11946'
            progress={progress}
          />
        <Switch>
          <Route exact path="/"><News setProgress = {setProgress} apikey={apikey} category="news"/></Route>

          <Route exact path="/Entertainment"><News setProgress = {setProgress} apikey={apikey} category="entertainment"/></Route>

          <Route exact path="/Business"><News setProgress = {setProgress} apikey={apikey} category="business"/></Route>

          <Route exact path="/Sports"><News setProgress = {setProgress} apikey={apikey} category="sports"/></Route>

          <Route exact path="/Health"><News setProgress = {setProgress} apikey={apikey} category="health"/></Route>

          <Route exact path="/Science"><News setProgress = {setProgress} apikey={apikey} category="science"/></Route>

          <Route exact path="/Technology"><News setProgress = {setProgress} apikey={apikey} category="technology"/></Route>
        </Switch>
        </Router>   
      </div>
    )
}
export default App;
