import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from 'pages';
import LoadingPage from 'components/LoadingPage';
import { IRoute } from './types/route';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
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
