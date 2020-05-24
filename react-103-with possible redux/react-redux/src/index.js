import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Weather from './Weather';
import {Caster} from './Caster';
import { DisplayWeather } from './DisplayWeather';
const weatherFC=[{id:1, day: "Tuesday", weatherforcast: "snowy"},
{id:2, day: "Monday", weatherforcast: "rainy"}]

ReactDOM.render(
  <React.StrictMode>
    {/*<App />
    <Weather props={weatherFC}/>
    <Caster />*/}
    <DisplayWeather />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
