import React from 'react';

export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }
  componentDidMount(){
      console.log("componentDidMount......")
    this.trimerId = setInterval(()=>
      this.trick(),1000);
  }
  componentWillUnmount(){
    console.log("componentWillUnmount......")
    clearInterval(this.trimerId);
  }
  trick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return(
      <div>
        <h1>It is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
