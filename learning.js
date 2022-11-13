/*import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1(prop) {

  return (
    <>
      <h1>{`Hello ${prop.user}!`}</h1>
      <Component2 user2={prop.user} />
    </>
  );
}

function Component2({ user2 }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user3={user2} />
    </>
  );
}

function Component3({ user3 }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user4={user3} />
    </>
  );
}

function Component4({ user4 }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user5={user4} />
    </>
  );
}

function Component5({ user5 }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user5} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 user={"Jessi"} />);*/
import React, {createContext, useContext} from "react";
import ReactDom from 'react-dom';

const UserContext = createContext();

function Component1(prop) {

  return (
    <UserContext.Provider value={prop.user}>
      <h1>{`Hello ${prop.user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}


function Component5() {
  const use = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${use} again!`}</h2>
    </>
  );
}

ReactDom.render(
  <Component1 user={"Jessi"}/>,
  document.getElementById("root")
)