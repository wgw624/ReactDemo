import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';
import Clock from './components/clock';
import Toggle from './components/toggle';
import ActionTest from './components/bodyButtonTest';



class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHeader />
        <BodyIndex age={247} username={'位光伟'} />
        <ActionTest />
        <ComponentFooter />
        <Clock />
        <Toggle />

      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
)
