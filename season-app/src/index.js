import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DoLake from './App';
import * as serviceWorker from './serviceWorker';

const Lakelist=["superlake","smalllake","lakeness"];
    const Coollakelist=[
        {id:1, name:"superlake", trailhead:"supremelake"},
        {id:2,name:"smalllake", trailhead:"smollake"},
        {id:3,name:"lakeness", trailhead:"famouslake"},
    ];

ReactDOM.render(
  <DoLake lakes={Coollakelist}/>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
