import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';
import Clock from './components/clock';



class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHeader />
        <BodyIndex age={24} />
        <ComponentFooter />
        <Clock />

      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
)
