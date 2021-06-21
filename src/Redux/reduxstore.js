import { createStore } from 'redux';
import Bookreducer from "./reduxreducer";

const mystore=createStore(Bookreducer);
console.log("Hello i am still now into the Redux store");
console.log(mystore);

export default mystore;