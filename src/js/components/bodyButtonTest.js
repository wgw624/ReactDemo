import React from 'react';
import ReactDOM from 'react-dom';

export default class ActionTest extends React.Component{

changeCole(){
  var btnObj = document.getElementById('submitBtn');
  ReactDOM.findDOMNode(btnObj).style.color = 'red';
  console.log(btnObj)
  console.log(this.refs.submitButton)
}
  render(){
    return(
      <div>
        <input type='button' ref='submitButton' id='submitBtn' value='提交' onClick={this.changeCole.bind(this)}/>
      </div>
    )

}
}
