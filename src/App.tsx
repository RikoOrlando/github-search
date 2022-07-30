import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { IRoute } from "./types/route";
import routes from "pages";

function App() {
  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <Routes>
          {routes.map(({ path, Component }: IRoute) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
