import React, {useState} from 'react';
import './style.css';
import Person from './components/person.js';


export default function App() {
  return (
    <div>
     <Person/>
    </div>
  );
}

// state - state in react is a plain javascript object used by react to represent a piece of information about the components current situation, it is completely managed by component itself.
