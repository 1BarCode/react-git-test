import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore } from "redux";

// HooksProj1 App
// import AppProj1 from "./HooksProj1/App";

// ---------------------------
// ReduxSongApp
// import ReduxSongApp from "./ReduxSongApp/components/ReduxSongApp";
// import rootReducer from "./ReduxSongApp/reducers";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={createStore(rootReducer)}>
//       <ReduxSongApp />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// ---------------------------

// Blog App

// import BlogApp from "./ReduxBlogApp/components/BlogAppIndex";
// import rootReducer from "./ReduxBlogApp/reducers/rootReducer";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={createStore(rootReducer)}>
//       <BlogApp />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//--------------------------
//React Router
import ReactRouterApp from "./ReactRouterApp/components/ReactRouterApp";
import rootReducer from "./ReactRouterApp/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reactRouterAppStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={reactRouterAppStore}>
    <ReactRouterApp />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
