import React from 'react';
import ReactDOM from 'react-dom';

export default class ActionTest extends React.Component{
constructor(){
  super();
  this.state={
    username:'张三'
  };
}
changeCole(){
  var btnObj = document.getElementById('submitBtn');
  ReactDOM.findDOMNode(btnObj).style.color = 'red';
  console.log(btnObj)
  console.log(this.refs.submitButton)
}
sendUrl(){
  fetch("http://localhost:8086/docHand/getOutHandUser",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams([["handFromUserId", "92f17e1d092e4eb9bafd2b665669978f"]]).toString() // 这里是请求对象
  })
  .then((res)=>{
    return res.json();
  })
  .then((res)=>{
    console.log(res.status+res.data[0].handFromUserName)
    this.setState({
      username:res.data[0].handFromUserName
    })
  })
}
  render(){
    return(
      <div>
        <p>请求回来的数据: {this.state.username}</p>
        <input type='button' ref='submitButton' id='submitBtn' value='提交' onClick={this.changeCole.bind(this)}/>
        <input type='button' value='请求url' onClick={this.sendUrl.bind(this)} />
      </div>
    )

}
}
