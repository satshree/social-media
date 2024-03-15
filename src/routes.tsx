import Home from "./pages/Home";
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
