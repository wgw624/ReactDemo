import React from 'react';
import ReactDOM from 'react-dom'

class LeftMenu extends React.Component{
  render(){
    return (
      <div className="leftMenu">
        <li>我的代办</li>
        <li>我的已办</li>
      </div>
    )
  }
}
class BodyData extends React.Component{
  render(){
    return(
      <div class="bodyData">
        <table className="commonTable">
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
        </table>

      </div>
    )
  }
}
const element =
    <div>
      <LeftMenu />
      <BodyData />
    </div>;
class RootCom extends React.Component{
  render(){
    return(
      <div>
        <LeftMenu />
        <BodyData />
      </div>
    )
  }
}
ReactDOM.render(
  //element,
  <RootCom />,
  document.getElementById('root')
);
