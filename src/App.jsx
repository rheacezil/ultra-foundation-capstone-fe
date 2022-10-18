// import { useAuthState } from "react-firebase-hooks/auth";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminFundraisers from "./components/AdminFundraisers";
import AdminPrograms from "./components/AdminPrograms";

import AboutUs from "./components/pages/AboutUs";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/authentication/Login";
import Signup from "./components/pages/authentication/Signup";
import Homepage from "./components/pages/HomePage";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/fundraiser" element={<AdminFundraisers />} />
            <Route path="/program" element={<AdminPrograms />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
