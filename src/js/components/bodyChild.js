import React from 'react';
import AntdComp from './antdComp';

export default class BodyChild extends React.Component{

  render(){
    return(
      <div>
          <input type="text" onChange={this.props.handleChildChange} />
          <AntdComp />
      </div>
    )
  }
}
