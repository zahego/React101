import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Game} from './Game';
import {DLC} from './DLC';
import {NoDLC} from './DLC';
//root component, basically means the main component
//state at root is source of truth, having many state at children component is possible but hard to keep track
//need ({})
//const Gamestop =({gList}) =>{ is the same as the one below. Below is ES6
class Gamestop extends Component{
    static defaultProps={
      gList:[{"title":"sicko mode", "dev":"yungmone", "hour":34}]
    }
  
    state={relase:false, mature:true, dlc:false, data:[], loading:false};
  
    //called before component mounted, great to initialized local state
    /*constructor(props){
      super(props);
      this.state={
        release:false,
      }
      this.toggleReleased=this.toggleReleased.bind(this);
    }*/
    
    componentDidMount(){
      this.setState({
        loading:true
      });
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data=>data.json())
      .then(data=>this.setState({data, loading:false}))
    }
    componentDidUpdate(){
      console.log("component did update");
    }
  
      //arrow automatically bind(this) if use toggleRelease(){}, then need to bind(this)
      toggleReleased=()=>{
        this.setState(july28=>({
          release:!july28.release,
          mature:!july28.mature,
        }))
      }
    
    render(){
      const {gList}=this.props;
    return(
      <div>
        <h1>Game stope is currently {this.state.release?"open":"broken"}</h1>
        <h6>{this.state.dlc?<DLC />:<NoDLC />}</h6>
        <h3>{this.state.loading?
        "loading":<div>
          {this.state.data.map(gaymer=>{
            return(
            <div key={gaymer.id}>
              <h3 >{gaymer.name}:{gaymer.description}</h3>
              <img alt={gaymer.image_title} src={gaymer.image} height={100}></img>
            </div>)
          })}
          </div>}</h3>
          {gList.map((g, id)=>
          <Game key={id} title={g.title} dev={g.dev} hour={g.hour} mature={this.state.mature}/>
          )}
          <button onClick={this.toggleReleased}>Release</button>
      </div>
    )
    }
  }
  Gamestop.propTypes={
    gList:PropTypes.array
  }
  
  Game.propTypes={
    title:PropTypes.string,
    dev:PropTypes.string,
    hour:PropTypes.number,
    mature:PropTypes.bool
  }
  export default Gamestop;