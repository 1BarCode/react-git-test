import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>Page One --</div>;
};
const PageTwo = () => {
  return (
    <div>
      Page Two **
      <button>Click Me!</button>
    </div>
  );
};

const ReactRouterApp = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouterApp;
