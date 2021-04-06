import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// import AppProj1 from "./HooksProj1/App";
import ReduxSongApp from "./ReduxSongApp/components/ReduxSongApp";
import reducers from "./ReduxSongApp/reducers";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <ReduxSongApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
