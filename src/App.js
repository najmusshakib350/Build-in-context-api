// import React from 'react';
// import ThemeContent from "./lib/themContext";
// import Section from './components/Section';

// export default class App extends React.Component{
//   state={
//     theme:'dark'
//   }

//   render(){
//     const {theme} =this.state;
//     return (
//       <div>
//           <ThemeContent.Provider value={{theme:theme}} >
//                <Section />
//           </ThemeContent.Provider>
//           <h1>Hello i am app component</h1>
//       </div>
//     )
//   }
// }

import React from 'react';

import Section from './components/Section';
import themeContext from './lib/themContext';

class App extends React.Component{
  state={
    theme:'#222'
  }

  changeTheme(){
    this.setState(() =>{
      return {
        theme:'#ccc'
      }
    })
  }

  render(){
     const {theme}=this.state;
    return(
      <div>
        <h1>I am App Component</h1>
        <themeContext.Provider value={{theme:theme, changeTheme:this.changeTheme.bind(this) }}>
           <Section />
        </themeContext.Provider>
      </div>
    )
  }
}

export default App;