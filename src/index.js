import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "milligram";
import './index.css'
import App from './components/App'
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import { addUser } from './actions'
// import chat from './reducers'


// const store = createStore(chat)

// // register ourselves as present in the chat
// store.dispatch(addUser('Me'))


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )