import React from 'react';
import style from './recepie.module.css';

const Recepie=({title,calories,image, ingredients})=>{
  return (
    <div className={style.recepie}>
    <h1 >{title}</h1>
    <ol>
    { ingredients.map( ingredients=>(
      <li>{ ingredients.text}</li>
    ))}
    </ol>
    <p>{Calories}</p>
    <img src={image} alt=""/>
  
    </div>
  )
}

export default Recepie;