import React from 'react';
import ReactDOM from 'react-dom';


export default class ComponentHeader extends React.Component{
  render(){
    var styleCompentCss={
      head:{
        backgroundColor:'#cccccc',
        color:'#ffffff'
      }
    }
    return(
      <header style={styleCompentCss.head} className='header'>
        <h1>CarsOA 系统</h1>
      </header>
    )
  }
}
