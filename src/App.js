import React from "react";
import "./style.css";
import {Provider} from 'react-redux';
import store from './store/store';
import Counter from './Counter';

export default function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Counter></ Counter>
    </div>
    </Provider>
  );
}
 