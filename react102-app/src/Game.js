import React, {Component} from 'react';
//props name in child must be same with parents, last time try matureContent instead of mature, it broke since props must be same
//default fill if the props is not supplied
export const Game =({title="that game", dev="that dev", hour=0, mature=true})=>{
    return(
      <section>
        <h2>{title}</h2>
        <h4>dev: {dev}</h4>
        <h6>time: {hour} hour</h6>
        <h6>mature content: {mature?'prolly not':'totally'} </h6>
      </section>
    )
  }