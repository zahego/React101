import React from 'react';

const Employee=({employee})=>{
    return(
    <ol>
        {employee.results.map((caster, id)=>{
            const {first, last}=caster.name
            return(
                <li key={id}>{first} {last}</li>
            )
        })}
    </ol>)
}
const WeatherCasterData =(ComposedCasterComponent, urlForCaster)=>
    class WeatherCasterData extends React.Component{
        constructor(props){
            super(props)
            this.state={casteer:[], loading:false, loaded:false}
        }
        
        componentDidMount(){
            let casterr=null
            this.setState({casteer:{results:[{name:{first:"yo",last:"lo"}}]}, loading:true, loaded:true});
            /*this shit doesnt work, will have to investigate latter, high chance is because fetch API has change since 2018
            fetch(urlForCaster)
            .then(response=>{response.json()})
            .then(casteert=>{this.setState({loaded:true, loading:false, casteer});casterr=casteert})*/
        }
        render(){
            return(
                <div>
                    {this.state.loaded?<ComposedCasterComponent employee={this.state.casteer} />:<div>Loading</div>}
                </div>
            )
        }
   
}
export const Caster = WeatherCasterData(Employee, 'https://randomuser.me/api?result=10')