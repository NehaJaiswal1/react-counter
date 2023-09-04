
import React,{useState, useEffect} from 'react';

// const person = (props)=>{
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>LastName: {props.LastName}</h2>
//       <h2>age: {props.age}</h2>
//     </>
//   )
// }
const person=()=>{
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
   alert("You've changed the counter to "+counter);
  },[counter]);

  return (
    <>
    <button onClick={
      ()=>setCounter(
        (prevCount)=>prevCount-1)
        }>-</button>
    <h1>{counter}</h1>
    <button onClick={
      ()=>setCounter((nextCount)=>nextCount+1)
    }>+</button>
    </>
  )
}


export default person;


