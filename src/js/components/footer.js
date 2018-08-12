import React from 'react';
import ReactDom from 'react-dom';
//import footerCss from '../../css/footer.css';
var footerCss = require("../../css/footer.css");

export default class ComponentFooter extends React.Component{
  render(){
    console.log(footerCss);
    return(
      <footer className = {footerCss.footerStyle}>
        <h1>The software blongs toe weiguangwei</h1>
      </footer>
    )
  }
}
