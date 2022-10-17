import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = ()=> {
  const pageSize = 20;
  const apikey = '35030fb8e5f74efea099f89b19b5cd21'

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
          <Route exact path="/"><News setProgress = {setProgress} apikey={apikey} key="General" pageSize={pageSize} country="in" category="General"/></Route>
          <Route exact path="/Entertainment"><News setProgress = {setProgress} apikey={apikey} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment"/></Route>
          <Route exact path="/Business"><News setProgress = {setProgress} apikey={apikey} key="Business" pageSize={pageSize} country="in" category="Business"/></Route>
          <Route exact path="/Sports"><News setProgress = {setProgress} apikey={apikey} key="Sports" pageSize={pageSize} country="in" category="Sports"/></Route>
          <Route exact path="/Health"><News setProgress = {setProgress} apikey={apikey} key="Health" pageSize={pageSize} country="in" category="Health"/></Route>
          <Route exact path="/Science"><News setProgress = {setProgress} apikey={apikey} key="Science" pageSize={pageSize} country="in" category="Science"/></Route>
          <Route exact path="/Technology"><News setProgress = {setProgress} apikey={apikey} key="Technology" pageSize={pageSize} country="in" category="Technology"/></Route>
        </Switch>
        </Router>   
      </div>
    )
}
export default App;
