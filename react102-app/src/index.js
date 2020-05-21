import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Gamestop from './Gamestop';


let mangoData={
  total:50,
  ripped:3,
  fresh:"baby",
  unexpected:true
}

var style={
  backgroundColor:'orange',
  color:'white',
  fontFamily: 'Arial'
}

//must be capital, no lower case allow
class Message extends React.Component{
render(){
  console.log(typeof this.props.age3);
  return(
<div style={style}>
    <h1 id='title' className='header' style={{color:this.props.color}}>
    {this.props.baby}
    
  </h1>
  <p>I'll be back in {this.props.minute} min, wait for me baby</p>
  </div>)}
};


const getPercent = decimal=>{
  return decimal*100+'%';
}
const calcMango = (total, ripped) =>{
  return getPercent(ripped/total);
}
const MangoManipulation=({total, ripped, fresh, unexpected})=>(
<section>
        <div>
          <p>Total: {total}</p>
          <p>Ripped: {ripped}</p>
          <p>It is {fresh}</p>
          <p>{unexpected?"expected":"unexpected"}</p>
          <p>Mango ripped: {calcMango(total, ripped)}</p>
        </div>
      </section>
);

/*class MangoManipulation extends Component{
  getPercent = decimal=>{
      return decimal*100+'%';
  }
  calcMango = (total, ripped) =>{
      return this.getPercent(ripped/total);
  }
  render(){
    const {total, ripped, fresh, unexpected}=this.props;
    return(
     <section>
        <div>
          <p>Total: {total}</p>
          <p>Ripped: {ripped}</p>
          <p>It is {fresh}</p>
          <p>{unexpected?"expected":"unexpected"}</p>
          <p>Mango ripped: {this.calcMango(total, ripped)}</p>
        </div>
      </section>
    )
  }
}*/

let gameList=[
  {"title":"hot fff", "dev":"soft inc", "hour":12},
  {"title":"cold sum", "dev":"bif craft", "hour":33},
  {"title":"stunner", "dev":"hun ster", "hour":45}
]









class NewFavoriteColor extends Component{
  state={value:''}
  newColor=e=>{
    this.setState({value:e.target.value})
  }
  submit=e=>{
    console.log('New Color:' +this.state.value);
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.submit}>
        <label>LSD color picker
        <input type="color" onChange={this.newColor}></input>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}



render(
  //only a string need "", anything that is not a string like number or boolean need {}
  //<Message age={50} color="blue" baby="ay yo girrrrrrrr" minute={5}/>,
  //<MangoManipulation total={mangoData.total} ripped={mangoData.ripped} fresh={mangoData.fresh} unexpected={!mangoData.unexpected} />,
  <Gamestop gList={gameList}/>,
  //<NewFavoriteColor />,
  document.getElementById('root'),
);