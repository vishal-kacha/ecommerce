import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="signin" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
