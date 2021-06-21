import React from 'react';
import HoverCounter from './HoverCounter';
import themeContext from '../lib/themContext';

const Content =()=>{
    return (
        <div>
            <h1>I am Content function</h1>
            <themeContext.Consumer >
               {
                   (value)=>{
                       console.log("I am Content function ");
                       console.log(value);
                      return <HoverCounter theme={value.theme} changeTheme={value.changeTheme}/>
                   }
               }
            </themeContext.Consumer>
        </div>
    )
}

export default Content;