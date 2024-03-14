import Home from "./pages/Home";
import Components from "./pages/ComponentList";
import { ReactNode } from "react";

type Route = {
  to: string;
  text?: string;
  element: ReactNode;
};

const routes: Route[] = [
  {
    to: "/",
    text: "home",
    element: <Home />,
  },
  {
    to: "/components",
    text: "components",
    element: <Components />,
  },
];

export function getRoute(routeName: string) {
  for (let r of routes) {
    if (r.text === routeName) return r;
  }

  return {
    to: "/",
    text: "",
    element: <></>,
  };
}

export default routes;
