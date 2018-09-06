import React from 'react';
import ReactDom  from 'react-dom';

import { Button } from 'antd';

export default class AntdComp extends React.Component{
  render(){
    return(
      <div>
         <Button type="primary">Primary</Button>
         <Button>Default</Button>
         <Button type="dashed">Dashed</Button>
         <Button type="danger">Danger</Button>
      </div>

    )
  }
}