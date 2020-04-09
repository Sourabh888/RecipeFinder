import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import React,{useEffect,useState} from "react";
import  Recepie from "./Recepie";


const App=()=>{
  const app_id="aeeb6359";
  const app_keys="1e148aae738a2642d8740d74ff7d7508	";
 

//USESTATE IS JUST A REPLICA OF STATE AND SETSTATE
//IT HAS TWO PARAMETERS WHICH IT RETURN HERE COUNTER IS JUST THIS.STATE
//AND SETCOUNTER IS THIS.SETSTATE.....THIS IS REACT HOOKS..
const [recepies,setRecepies]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery]=useState('chicken');
//useEffect RUNS EVERY TIME OUR PAGE RE-RENDERS.
//if yOU ADD EMPTY ARRAY AS PARAMETER TO USEEFFECT THIS WILL ONLY RUN ONCE
//useEffect IS JUST LIKE ComponentDIDMOUNT AS IT IS THE FIRST THING THAT RUNS WHEN OUR PROJECT LOADS.
useEffect(()=>{
 getRecepies();
},[query]); 


const getRecepies=async()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_keys}`);
  const data= await response.json();
setRecepies(data.hits);
console.log(data.hits);
}

const updateSearch=e=>{
  setSearch(e.target.value);
}

const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
  setSearch(' ');
}

return (
  <div className="App">
  <form  onSubmit={getSearch} className="search-form">
  <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
  <button className="seach-button" type="submit">
search
  </button>

  </form>
  <div className="recepies">
 
 {recepies.map(recepie=>{
   <Recepie title ={recepie.recepie.title}
   calories={recepie.recepie.calories}
   image={recepie.recepie.image}
   ingredients={recepie.recepie.ingredients}
   />
 })}
</div>
  </div>
)
}
 
render(<App />, document.getElementById('root'));
