import React, {useState, useEffect} from "react";

//function User(props) {
const User = (props)=>{
  const [planet, setPlanet] = useState("earth");

  //componentDidMount
  useEffect(()=>{
    console.log("Component mounting");
  }, []);

  //componentDidUpdate
  useEffect(()=>{
    console.log("planet changes");
  }, [planet]);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button onClick={() => setPlanet("pluto")} >{planet}</button>
    </div>
  );
}




export default User;

//Hooks _> enable use of state in ur functional component - useState, useEffect

//props -> properties/params, a data that is passed one component to another
//life cycle method ->
//mount--components is initially rendered in ur dom

//Constructor, Render, componentDidMount---side effects


//update--component is being updated
//unmount--components is removed from the dom
