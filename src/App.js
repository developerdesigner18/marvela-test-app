import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
