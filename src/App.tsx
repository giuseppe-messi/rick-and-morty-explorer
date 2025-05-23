import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Layout } from "./Layout";
import { Loading } from "./design-system/components/Loading/Loading";
import "./App.css";

// Lazy load pages
const Home = lazy(() => import("./pages/Home/Home"));

const Characters = lazy(() => import("./pages/Characters/Characters"));

const Episodes = lazy(() => import("./pages/Episodes/Episodes"));

const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App: React.FC = () => (
  <div className="App">
    <ErrorBoundary>
      <Router>
        <Suspense
          fallback={
            <div className="loading">
              <Loading />
            </div>
          }
        >
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="characters" element={<Characters />} />
              <Route path="episodes" element={<Episodes />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  </div>
);

export default App;
