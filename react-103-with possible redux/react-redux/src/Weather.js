import React from 'react';
import ReactDOM from 'react-dom';
class Weather extends React.Component{
    render(){
        return(
            <>
            <TV />
            <dl>
                {/*ha ha, this is the dumbest naming test. The props.props is because second props is used in index.js. Could literary name it props.any_name */}
                {this.props.props.map(weather=>(
                    <React.Fragment key={weather.id}>
                    <dt>{weather.day}</dt>
                    <dd>{weather.weatherforcast}</dd>
                    </React.Fragment>
                ))}
            </dl>
            </>
        )
    }
}
const Context=React.createContext();
class ContextProvider extends React.Component{
    state={name:"sunny",
            recomendation:"go outside"}
    render(){
        return(
            //this provider come with createContext() of Context class
            <Context.Provider value={{state:this.state,
            changeRec:()=>this.setState({recomendation:"stay indoor"})}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export default Weather;
const WeatherForCast = ({weatherFCprops}) =>{
    return(
        <div>
            <Context.Consumer>{(amethodthatprovidecontext)=>(
                <div>
            <p>the weather today is {amethodthatprovidecontext.state.name}</p>
            <p>Recommendation for today: {amethodthatprovidecontext.state.recomendation}</p>
            <button onClick={amethodthatprovidecontext.changeRec}>get recomendation</button>
            </div>
            )}
            </Context.Consumer>
            </div>
    )
}
const Channel = () =>{
    return(
    <WeatherForCast />
    )
}
class TV extends React.Component{
    
    render(){
        return(
            <ContextProvider>
        <div>
            <Channel/>
        </div>
        </ContextProvider>)
    }
}