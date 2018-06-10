import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';

class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHeader />
        <BodyIndex age={24} />
        <ComponentFooter />
      </div>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById("root")
)
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
