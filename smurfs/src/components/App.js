import React, { Component, Fragment } from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

function App() {
    return (
      <Fragment>
        <h1>Welcome To Smurfs Creator!</h1>
        <SmurfForm/>
        <SmurfList/>
      </Fragment>
    );
  }

  
export default App;