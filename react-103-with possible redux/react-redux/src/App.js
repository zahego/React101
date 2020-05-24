import React from 'react';
import logo from './logo.svg';
import './App.css';

var styleNav={
  display:"flex",
  justifyContent:'space-around',
  color:'coral',
  backgroundColor:'cadetblue',
  fontSize: '30px'
}
const NavItem=()=>
//this is React.Fragment shorten syntax
<>
<a href='/'>Home</a>
<a href='/about'>About</a>
<a href='/serivce'>Service</a>
<a href='/contact'>Contact</a>
</>
//end of fragment
function App() {
  return (
    <div className="App">
      <header>
       <nav style={styleNav}>
         <NavItem />
       </nav>
      </header>
    </div>
  );
}

export default App;
