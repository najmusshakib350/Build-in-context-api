import React from 'react';
import HoverCounter from './HoverCounter';
import themeContext from '../lib/themContext';

class Content extends React.Component{
    //Rule 1
   //static contextType=themeContext
   componentDidMount(){
       console.log(this.context);
   }
   render(){
       const {theme, changeTheme} =this.context;

        return (
            <div>
                <h1>I am Content function</h1>                  
                <HoverCounter theme={theme} changeTheme={changeTheme}/>
            </div>
        )
   }
}
//Rule 2
 Content.contextType=themeContext
export default Content;