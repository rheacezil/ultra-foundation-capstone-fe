// import { useAuthState } from "react-firebase-hooks/auth";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";
import Login from "./components/pages/authentication/Login";
import Signup from "./components/pages/authentication/Signup";
import Homepage from "./components/pages/HomePage";
import LandingPage from "./components/pages/LandingPage";

import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  const activeUser = useSelector((state) => state.activeUser);

  const checkIfActive = () => {
    let isActive = false;
    if (user || activeUser.email) {
      isActive = true;
    } else {
      console.log("no user active");
    }

    return isActive;
  };
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {checkIfActive()
              ? [<Route path="/home" element={<Homepage />} />]
              : [<Route path={"*"} element={<Navigate replace to={"/"} />} />]}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
