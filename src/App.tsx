import { Routes, Route } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <div className="page">
      <Routes>
        {routes.map((route) => (
          <Route key={route.text} path={route.to} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
