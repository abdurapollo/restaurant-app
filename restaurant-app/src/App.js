import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink  } from 'react-router-dom'
import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantsList from './components/RestaurantsList'
import RestaurantUpdate from './components/RestaurantUpdate'
import Login from './components/Login'
import Logout from './components/Logout'
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
    
       <Router>
         {/* <Route exact path="/">
           <Home />
         </Route>
         <Route path="/create">
           <RestaurantCreate />
         </Route>
         <Route path="/list">
           <RestaurantsList />
         </Route>
         <Route path="/detail">
           <RestaurantDetail />
         </Route>
         <Route path="/search">
           <RestaurantSearch />
         </Route>
         <Route path="/logout">
           <Logout />
         </Route> */}

         <Route path="/update/:id"
           render={props=>(
            <RestaurantUpdate {...props} />
           )}
         >
         </Route>
         <Route path="/login"
           render={props=>(
            <Login {...props} />
           )}
         >
         </Route>
         <Protected exact path="/" component={Home} />
         <Protected exact path="/create" component={RestaurantCreate} />
         <Protected exact path="/list" component={RestaurantsList} />
         <Protected exact path="/detail" component={RestaurantDetail} />
         <Protected exact path="/search" component={RestaurantSearch} />
         <Protected exact path="/logout" component={Logout} />
       </Router>
    </div>
  );
}

export default App;
