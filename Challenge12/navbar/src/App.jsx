import React from 'react';
import {Route , Switch} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Service from './Service';
import User from './User';
import Error from './Error';
import Navbar from './Navbar';
import './index.css';

const App = () => {

  return (
    <>
     <Navbar/>
      <Switch>
        <Route exact path="/" component={() => <About name='About'/>}/>
        <Route  exact path="/contact" render={Contact}/>
        <Route  exact path="/service" component={() => <Service name="Service"/>} />
        <Route  path="/user/:fname/:lname" component={User}/>
        <Route  Component={Error}/>
      </Switch>
    </>
  );
};

export default App;
