import React from 'react';
export const DisplayWeather =()=>{
    return(
    <WeatherStatement displayThatBish={({wedamessage})=><h1>{wedamessage}</h1>} />
    )
}
//a really long and steammy way. Another way is just to drop all the render props and keep this line <h1>{statement}</h1>
const WeatherStatement=({displayThatBish})=>{
    return(
    <div>
        {displayThatBish({wedamessage:statement})}
    </div>
    )
}

let statement="it's sunny and creamy today. I wish I was a bird"