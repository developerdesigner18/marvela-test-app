import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import HomePage from "./components/HomePage/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RequireUser from "./components/RequireUser";
import OnlyIfNotLoggedIn from "./components/OnlyIfNotLoggedIn";
import SignupStart from "./components/Signup/SignupStart/SignupStart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route element={<RequireUser />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route element={<OnlyIfNotLoggedIn />}>
            <Route path="/signup-begin" element={<SignupStart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Route>


        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
