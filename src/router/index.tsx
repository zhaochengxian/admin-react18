import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = React.lazy(() => import("../layout/index"));
const Ceshi = React.lazy(() => import("../pages/ceshi"));

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
let routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Ceshi /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes;
