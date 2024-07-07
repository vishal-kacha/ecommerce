import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoadedToken from "./utils/LoadedToken";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Suspense fallback={<>Loading ..</>}>
                  <Home />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <LoadedToken>
                <Suspense fallback={<>Loading ..</>}>
                  <Signin />
                </Suspense>
              </LoadedToken>
            }
          />
          <Route
            path="/signup"
            element={
              <LoadedToken>
                <Suspense fallback={<>loading..</>}>
                  <Signup />
                </Suspense>
              </LoadedToken>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
