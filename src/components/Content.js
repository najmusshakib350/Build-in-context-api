import React,{useEffect,useContext} from 'react';
import HoverCounter from './HoverCounter';
import themeContext from '../lib/themContext';

const Content =()=>{
    const context =useContext(themeContext);
    
    useEffect(() =>{
        console.log("I am useEffect function");
        console.log(context);
    });

    const {theme, changeTheme}=context;
    return (
        <div>
            <h1>I am Content function</h1>                  
            <HoverCounter theme={theme} changeTheme={changeTheme}/>
        </div>
    ) 
}
export default Content;