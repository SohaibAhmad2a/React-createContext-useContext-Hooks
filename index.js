
import React,{useContext, useState} from 'react';
import ReactDom from 'react-dom';
//import App from './App.js';

const Context=React.createContext();

function App2(prop){
  return<div>
  <Context.Provider value={prop.name}>
    <App/>
  </Context.Provider>
  </div>
}

function App(){
  return <div>
      <h1>Integral Change.</h1>
      <Child/>
  </div>;
}

function Child(){
  const state = useContext(Context); 
  const [status,changeState]=useState(state);
  return <div>
      <h3>Current Integer is: <h2>{status}</h2> You can Intrement or Decrement Integer if it is less 100 or greater than 0 respectively.</h3>
      <button onClick={()=>{if(status<100){changeState(status+1)}}}><h2>Increment By One</h2></button>
      <button onClick={()=>{if(status>0){changeState(status-1)}}}><h2>Decrement By One</h2></button>
  </div>;
}

ReactDom.render(
  <div>
  <App2 name={0}/>
  </div>,
  document.getElementById("root")
)
