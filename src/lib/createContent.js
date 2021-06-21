// class Context{
//     constructor(value){
//         this.value=value
//     }

//     //provider
//     Provider=({children, value})=>{
//         this.value=value;
//         return children;
//     }

//     //Consumer
//     Consumer=({children})=>{
//         return children(this.value);
//     }

// }

// function createContext(value=null){
//     const context=new Context(value);
//     return {
//         Provider:context.Provider,
//         Consumer:context.Consumer
//     }
// }

// export default createContext;

class Context{
    constructor(value, themeChange){
       this.value=value;
       this.themeChange=themeChange;
    }

    //Provider
    Provider=({ children,theme,changeTheme})=>{
       this.value=theme;
       this.themeChange=changeTheme;
       return children;
    }

    //Consumer
    Consumer=({children})=>{
        return children(this.value, this.themeChange);
    }
}

const createContent =(value, themeChange)=>{
    const context =new Context(value, themeChange);
    return {
        Provider:context.Provider,
        Consumer:context.Consumer
    }
}

export default createContent;