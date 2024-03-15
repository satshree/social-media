import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import routes from "./routes";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.text} path={route.to} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
