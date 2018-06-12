import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild';


export default class BodyIndex extends React.Component{
  constructor(){
    super();
    this.state={username:"胡歌",age:25}

  }
  handleChildChange(event){

    this.setState({age:event.target.value})
  }
  changeAge(){

    this.setState({age:28});
  }
  render(){
    var btnVal = "改变age"
    // setTimeout(()=>{
    //   this.setState({username:'刘德华'})
    // },2000);

    return(
      <div>
        <input type="button" value={this.state.username} />
        {/*jsx 注释 html 空格*/}
        <p> prop age:{this.props.age}</p>
        <p>state age:{this.state.age}</p>
        <input type="button" value={btnVal} onClick={this.changeAge.bind(this)} />
        <BodyChild handleChildChange={this.handleChildChange.bind(this)} />
      </div>
    )
  }
}
