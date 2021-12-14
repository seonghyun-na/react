import React from 'react';
import './App.css';
import SubList from './Component/Sublist';
import Wbnx1 from './Component/Wbnx1';
import Wbnx2 from './Component/Wbnx2';
import Wbnx3 from './Component/Wbnx3';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wbnx5 from './Component/Wbnx5';
import Wbnx4 from './Component/Wbnx4';
import Menu from './Menu';
import './Menu.css';
import Kcf7 from './Component/Kcf7';
import Map from './Component/Inventorty/Sites/Map';
import Test from './Component/Inventorty/Sites/Test';
import Map2 from './Component/Inventorty/Sites/Map2';
function App() {
  return (
    <Router>
      <div className="App">
        <Menu/>
        <SubList/>
        <Switch>
          <Route 
            path="/Wbnx1">
            <Wbnx1/>
          </Route>
          <Route 
            path="/Wbnx2">
            <Wbnx2/>
          </Route>
          <Route 
            path="/Wbnx3">
            <Wbnx3/>
          </Route>
          <Route 
            path="/Wbnx4">
            <Wbnx4/>
          </Route>
          <Route 
            path="/Wbnx5">
            <Wbnx5/>
          </Route>
          <Route 
            path="/Kcf7">
            <Kcf7/>
          </Route>
          <Route 
            path="/Map">
            <Map />
          </Route>
          <Route 
            path="/Map2">
            <Map2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
