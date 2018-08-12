import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild';
import PropTypes from 'prop-types';

const defaultProps ={
  username:'这是测试的名字'
}

export default class BodyIndex extends React.Component{
  constructor(){
    super();
    this.state={username:"胡歌",age:25,flag: true}

  }
  handleChildChange(event){

    this.setState({age:event.target.value})
  }
  changeAge(){
    this.setState({age:'rte'});
  }
  changeStyle(){
    this.setState({
      flag :!this.state.flag
    })
  }
  render(){
    var btnVal = "改变age"
    // setTimeout(()=>{
    //   this.setState({username:'刘德华'})
    // },2000);

    var styleCss = {
      color:(this.state.flag)?'red':'blue',
      fontSize:'18px'
    }
    return(
      <div>
        <input type="button" value={this.state.username} />
        {/*jsx 注释 html 空格*/}
        <p> 来自父页面：age:{this.props.age}</p>
        <p>自己页面 state age:{this.state.age}</p>
        <p style={styleCss}>来自父页面的默认值测试：{this.props.username}</p>
        <input type="button" value={btnVal} onClick={this.changeAge.bind(this)} />
          <input type="button" value='改变样式'  onClick={this.changeStyle.bind(this)} />
        <BodyChild handleChildChange={this.handleChildChange.bind(this)} />
      </div>
    )
  }
}
BodyIndex.propTypes = {
  age: PropTypes.number
};

BodyIndex.defaultProps = defaultProps;
