import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages/index/Index";

const routes = [
  {
    name: "Index",
    path: "/",
    exact: true,
    component: Index
  }
];

export default () => {
  return (
    <Router>
      {routes.map((r, i) => {
        const { component: Component, ...others } = r;
        return (
          <Route
            key={i}
            {...others}
            render={rprops => <Component {...rprops} />}
          />
        );
      })}
    </Router>
  );
};
