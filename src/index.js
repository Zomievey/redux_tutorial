import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit" // redux-toolkit this is a library that helps us to create a store //
import { Provider } from "react-redux" // this is a library that helps us to connect our store to our react app //
import userReducer from './features/user';
import themeReducer from './features/theme';



const store = configureStore({
  reducer: { //what is a reducer? a function that takes in the state and returns a new state called an "action" //
    user: userReducer, // this is the name of the reducer //
    theme: themeReducer // this is the name of the reducer //
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
