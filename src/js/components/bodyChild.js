import React from 'react';
export default class BodyChild extends React.Component{

  render(){
    return(
      <div>
          <input type="text" onChange={this.props.handleChildChange} />
      </div>
    )
  }
}
