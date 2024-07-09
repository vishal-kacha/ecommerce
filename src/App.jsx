import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadedToken from "./utils/LoadedToken";
import { lazy, Suspense } from "react";
import Product from "./pages/Product";

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
              <Suspense fallback={<>Loading ..</>}>
                <Home />
              </Suspense>
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
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
