import React from 'react';

const HoverCounter =({theme, changeTheme})=>{
    return (
        <div>
            <h1 onMouseOver={changeTheme} style={{backgroundColor: theme}}>I am HoverCounter function</h1>
        </div>
    )
}

export default HoverCounter;